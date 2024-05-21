import { Box, Button, Card, Divider, Grid, Modal, TextField, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../state/Order/Action';
import { clearCart } from '../../state/Cart/Action';
import jsPDF from 'jspdf';
import { CartItem } from '../Cart/CartItem';
import { AddressCart } from '../Cart/AddressCart';

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

export const Adresses = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { cart, auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
    setSnackbarOpen(true);
    handleClose();
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
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 '>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>
              Addresses
            </h1>
            <div className='flex gap-5 flex-wrap justify-center'>
              {cart.cart?.customer.addresses && cart.cart?.customer.addresses.map((address) => (
                <AddressCart
                  key={address.id}
                  item={address}
                  showButton={true}
                />
              ))}
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
