import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MenuCard } from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../../state/Restaurant/Actions';
import { getMenuItemsByRestaurantId } from '../../state/Menu/Action';

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegeterian Only", value: "vegeterian" },
    { label: "Non Vegeterian", value: "non_vegeterian" },
    { label: "Seasonal", value: "seasonal" },
]
export const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const { auth, restaurant ,menu} = useSelector(store => store)
    const { id } = useParams();
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
    console.log("restaurant : ", restaurant)
    console.log("restaurant categories : ", restaurant.categories)
    console.log("menu : ",menu)

    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantsCategory(id, jwt))
        dispatch(getMenuItemsByRestaurantId({jwt,
            restaurantId: id}))
    }, [])
    return (
        <div className='text-left px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'> Home/morocco/QueueCuisine/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[0]}
                                alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                alt=""
                                src={restaurant.restaurant?.images[1]} />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                alt=""
                                src='https://cdn.vox-cdn.com/thumbor/RHr84HOt0AdETtmgIZbKvMBFFfQ=/0x0:1600x1067/1200x675/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/70282738/51127787012_4b8c6f05ea_h.0.jpg' />
                        </Grid>
                    </Grid>


                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>
                        {restaurant.restaurant?.name}
                    </h1>
                    <p className=' text-gray-500 mt-1'>
                        {restaurant.restaurant?.description}
                    </p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span className=''>
                                {restaurant.restaurant?.address.streetAddress} {restaurant.restaurant?.address.city} {restaurant.restaurant?.address.stateProvince} {restaurant.restaurant?.address.postalCode} , {restaurant.restaurant?.address.country}
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarMonthIcon />
                            <span>
                                {restaurant.restaurant?.openingHours}
                            </span>
                        </p>
                    </div>

                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter '>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {foodTypes.map((item) => <FormControlLabel
                                        value={item.value}
                                        control={<Radio />}
                                        label={item.label}
                                        key={item.value}
                                    />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {restaurant.categories && restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            value={item}
                                            control={<Radio />}
                                            label={item.name}
                                            key={item}
                                        />
                                    ))}

                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.menuItems.map((item) => <MenuCard item={item}/>)}
                </div>
            </section>
        </div>
    )
}
