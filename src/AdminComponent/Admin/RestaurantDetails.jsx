import { Button, Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../state/Restaurant/Actions';

export const RestaurantDetails = (url) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const restaurant = useSelector(store => store.restaurant);

  const handleRestaurantStatus = () => {
    console.log("jwt and id: ", jwt, restaurant?.usersRestaurant?.id);
    if (restaurant?.usersRestaurant?.id) {
      dispatch(updateRestaurantStatus(restaurant.usersRestaurant.id, jwt));
    }
  };

  const handleClickFacebook = () => {
    const facebookUrl = restaurant?.usersRestaurant?.contactInformation?.facebook;
    if (facebookUrl) {
      window.location.href = facebookUrl.startsWith('http') ? facebookUrl : `http://${facebookUrl}`;
    }
  };

  const handleClickInstagram = () => {
    const instagramUrl = restaurant?.usersRestaurant?.contactInformation?.instagram;
    if (instagramUrl) {
      window.location.href = instagramUrl.startsWith('http') ? instagramUrl : `http://${instagramUrl}`;
    }
  };

  if (!restaurant?.usersRestaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className='lg:px-20 px-5 pb-10'>
      <div className='py-5 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-5'>
        <h1 className='text-2xl lg:text-7xl text-left font-bold p-6'>
          {restaurant.usersRestaurant?.name}
        </h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Restaurant</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48 text-left'>Owner</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.owner?.fullName}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>Restaurant Name</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.name}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>Cuisine Type</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.cuisineType}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>Opening Hours</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.openingHours}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>Status</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.open ? (
                      <span
                        onClick={handleRestaurantStatus}
                        className='px-5 py-2 rounded-full bg-green-400 text-gray-950 cursor-pointer'
                      >
                        OPEN
                      </span>
                    ) : (
                      <span
                        onClick={handleRestaurantStatus}
                        className='px-5 py-2 rounded-full bg-red-400 text-gray-950 cursor-pointer'
                      >
                        CLOSE
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
            <CardHeader title={<span className='text-gray-300'>Address</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48 text-left'>Country</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.address?.country}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>City</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.address?.city}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>Postal Code</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.address?.postalCode}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>Street Address</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.address?.streetAddress}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>State/Province</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.address?.stateProvince}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Contact</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48 text-left'>Email</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.contactInformation?.email}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 text-left'>Mobile Phone</p>
                  <p className='text-gray-400 text-left'>
                    <span className='pr-5'></span>
                    {restaurant.usersRestaurant?.contactInformation?.mobile}
                  </p>
                </div>
                <div className='flex'>
                  <IconButton onClick={handleClickFacebook}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton onClick={handleClickInstagram}>
                    <InstagramIcon />
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
