import { Button, Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const RestaurantDetails = () => {
  const handleRestaurantStatus = () => {
    // Add your logic here
  };

  return (
    <div className='lg:px-20 px-5 pb-10'>
      <div className='py-5 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-5'>
        <h1 className='text-2xl lg:text-7xl text-left font-bold p-6'> 
          Sizzle Grill
        </h1>
        <div>
          <Button 
            color={true ? "primary" : "error"} 
            className='py-[1rem] px-[2rem]' 
            variant='contained' 
            onClick={handleRestaurantStatus} 
            size='large'>
            {true ? "close" : "open"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={
              <span className='text-gray-300'>
                Restaurant
              </span>
            } />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Owner
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    Hassan ABIDAR
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Restaurant Name
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    Sizzle Grill
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Cuisine Type
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    Moroccan Cuisine
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Opening Hours
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    Monday-Friday: 12:00 PM - 10:00 PM, Saturday-Sunday: 11:00 AM - 11:00 PM
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Status
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {true ? (
                      <span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>
                        OPEN
                      </span>
                    ) : (
                      <span className='px-5 py-2 rounded-full bg-red-400 text-gray-950'>
                        CLOSED
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>    
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={
              <span className='text-gray-300'>
                Address
              </span>
            } />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Country
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    Morocco
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    City
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    Rabat
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Postal Code
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    87200
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Street Address
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    54 Avenue AGDAL
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={
              <span className='text-gray-300'>
                Contact
              </span>
            } />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Email
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    owner@gmail.com
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Mobile Phone
                  </p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    +212697162563
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>
                    Socials
                  </p>
                  <IconButton>
                    <FacebookIcon/>
                  </IconButton>
                  <IconButton>
                    <InstagramIcon/>
                  </IconButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
    </div>
  );
};
