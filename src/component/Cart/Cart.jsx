import { Box, Button, Card, Divider, Grid, Modal, TextField, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import { CartItem } from './CartItem';
import { AddressCart } from './AddressCart';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../state/Order/Action';
import { clearCart } from '../../state/Cart/Action';
import jsPDF from 'jspdf';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#191919',
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: ""
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street address is required !!"),
  state: Yup.string().required("State is required !!"),
  pincode: Yup.number().required("Pincode is required !!"),
  city: Yup.string().required("City is required !!"),
});

export const Cart = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { cart, auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const handleSelectAddress = (address) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: address
      }
    };
    dispatch(createOrder(data))
    setSnackbarOpen(true);
    console.log("Selected address:", address);
  };

  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClearCart = () => {
    dispatch(clearCart(localStorage.getItem("jwt")));
  };

  const handleSubmit = (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: {
          fullName: auth.user.fullName,
          streetAddress: values.streetAddress,
          city: values.city,
          state: values.state,
          postalCode: values.pincode,
          country: "Morocco"
        }
      }
    };
    console.log("data : ", data);
    dispatch(createOrder(data));
    setSnackbarOpen(true);
    handleClose();
    generatePDF(data);
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Bill Details", 20, 20);

    doc.setFontSize(12);
    doc.text(`Full Name: ${data.order.deliveryAddress.fullName}`, 20, 30);
    doc.text(`Street Address: ${data.order.deliveryAddress.streetAddress}`, 20, 40);
    doc.text(`City: ${data.order.deliveryAddress.city}`, 20, 50);
    doc.text(`State: ${data.order.deliveryAddress.state}`, 20, 60);
    doc.text(`Postal Code: ${data.order.deliveryAddress.postalCode}`, 20, 70);
    doc.text(`Country: ${data.order.deliveryAddress.country}`, 20, 80);

    doc.text(`Item Total: ${cart.cart?.total} MAD`, 20, 90);
    doc.text("Delivery Charges: 14 MAD", 20, 100);
    doc.text("Restaurant Charges: 20 MAD", 20, 110);
    doc.text(`Total to Pay: ${cart.cart?.total + 14 + 20} MAD`, 20, 120);

    doc.save()
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          {cart.cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Divider />
          <div className='billDetails px-5 text-sm '>
            <p className='font-extralight py-5'>
              Bill Details
            </p>
            <div className='space-y-3'>
              <div className='flex justify-between text-gray-400'>
                <p>
                  Item Total
                </p>
                <p>
                  {cart.cart?.total} MAD
                </p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>
                  Delivery Charges
                </p>
                <p>
                  14 MAD
                </p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>
                  Restaurant Charges
                </p>
                <p>
                  20 MAD
                </p>
              </div>
              <Divider />
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>
                Total to pay
              </p>
              <p>
                {cart.cart?.total + 14 + 20} MAD
              </p>
            </div>
          </div>
          <Button color='primary' variant='contained' onClick={handleClearCart}>{<DeleteForeverIcon/>} </Button>

        </section>
        <Divider orientation='vertical' flexItem />
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 '>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>
              Choose Delivery Address
            </h1>
            <div className='flex gap-5 flex-wrap justify-center'>
              {cart.cart?.customer.addresses && cart.cart?.customer.addresses.map((address) => (
                <AddressCart
                  key={address.id}
                  item={address}
                  showButton={true}
                  handleSelectAddress={handleSelectAddress}
                />
              ))}
              <Card className='flex gap-5 w-64 p-5'>
                <AddLocationAltIcon />
                <div className='space-y-3 text-gray-500'>
                  <h1 className='font-semibold text-lg text-white'>
                    Add address
                  </h1>
                  <Button color='primary' variant='contained' fullWidth onClick={handleOpenAddressModel}> Add </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("streetAddress")}
                    helperText={
                      <ErrorMessage name="streetAddress">
                        {(msg) => <span className='text-red-600'>{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="State"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("state")}
                    helperText={
                      <ErrorMessage name="state">
                        {(msg) => <span className='text-red-600'>{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="PinCode"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("pincode")}
                    helperText={
                      <ErrorMessage name="pincode">
                        {(msg) => <span className='text-red-600'>{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("city")}
                    helperText={
                      <ErrorMessage name="city">
                        {(msg) => <span className='text-red-600'>{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant='contained' type='submit' color='primary'>
                    Deliver here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Order created successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
