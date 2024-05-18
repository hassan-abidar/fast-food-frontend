import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import { CartItem } from './CartItem'
import { AddressCart } from './AddressCart'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../state/Order/Action';
import { clearCart } from '../../state/Cart/Action';
import Alert from '@mui/material/Alert';
import { CheckIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';


 export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#191919',
  outline:"none",
  boxShadow: 24,
  p: 4,
};


const initialValues = {
  streetAddress : "",
  state:"",
  pincode:"",
  city:""
}
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street address is required !!"),
  state: Yup.string().required("State is required !!"), // corrected typo
  pincode: Yup.number().required("Pincode is required !!"),
  city: Yup.string().required("City is required !!"),
});

export const Cart = () => {
  const handleOpenAddressModel = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const {cart,auth}=useSelector(store=>store)
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch();
  const handleClearCart =()=>{
    dispatch(clearCart(localStorage.getItem("jwt")));      
  }
  const [showAlert, setShowAlert] = useState(false); 
  const handleSubmit=(values)=>{
      const data = {
        jwt:localStorage.getItem("jwt"),
        order:{
            restaurantId:cart.cartItems[0].food?.restaurant.id,
            deliveryAddress:{
            fullName:auth.user.fullName,
            streetAddress:values.streetAddress,
            city:values.city,
            state:values.state,
            postalCode:values.postalCode,
            country:"Morocco"
          }
        }
      }
      console.log("data : ",data)
      dispatch(createOrder(data))
      setShowAlert(true);   
      handleClose();   
  }

  return (
    <>
      
      
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          {cart.cartItems.map((item) => 
          (<CartItem item={item} />))}
          <Divider />
          <div className='billlDetails px-5 text-sm '>
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
                {cart.cart?.total+14+20} MAD
              </p>
              

            </div>
            <Button color='primary' variant='contained' fullWidth onClick={handleClearCart}> Clear Cart </Button>
          </div>
        </section>
        <Divider orientation='vertical' flexItem />
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 '>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>
              Choose Delivery Address</h1>
            <div className='flex gap-5 flex-wrap justify-center'>
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
        <Box sx={{ ...style}}>
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
              helpertext={
                <ErrorMessage>
                  {(msg)=><span className='text-red-600'>{msg}</span>}
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
              helpertext={
                <ErrorMessage>
                  {(msg)=><span className='text-red-600'>{msg}</span>}
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
              error={!ErrorMessage("state")}
              helpertext={
                <ErrorMessage>
                  {(msg)=><span className='text-red-600'>{msg}</span>}
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
              error={!ErrorMessage("state")}
              helpertext={
                <ErrorMessage>
                  {(msg)=><span className='text-red-600'>{msg}</span>}
                </ErrorMessage>
              }
              />
            </Grid>
            <Grid item xs={12}>
              <Button  fullWidth variant='contained' type='submit' color='primary'>
                Deliver here
              </Button>
            </Grid>           
          </Grid>
          
          </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  )
}
