import { Divider, FormControl, FormControlLabel, Grid, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MenuCard } from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../../state/Restaurant/Actions';
import { getMenuItemsByRestaurantId, searchMenuItem } from '../../state/Menu/Action';
import SearchIcon from '@mui/icons-material/Search';

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegeterian Only", value: "vegeterian" },
    { label: "Non Vegeterian", value: "non_vegeterian" },
    { label: "Seasonal", value: "seasonal" },
];

export const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [keyword, setKeyword] = useState('');
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth, restaurant, menu } = useSelector(store => store);
    const { id } = useParams();

    const handleFilter = (e) => {
        setFoodType(e.target.value);
    };

    const handleFilterCategory = (e, value) => {
        setSelectedCategory(value);
    };

    const handleSearchFood = () => {
        const keywordLowerCase = keyword.toLowerCase();
        const filtered = menu.menuItems.filter(item =>
            item.name.toLowerCase().includes(keywordLowerCase) ||
            item.description.toLowerCase().includes(keywordLowerCase)
        );
        setFilteredMenu(filtered);
    };

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    useEffect(() => {
        dispatch(getRestaurantsCategory({ jwt, restaurantId: id }));
        dispatch(getRestaurantById({ jwt, restaurantId: id }));
        dispatch(getRestaurantsCategory({ id, jwt }));
        dispatch(getMenuItemsByRestaurantId({ jwt, restaurantId: id }));
    }, [dispatch, id, jwt]);

    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId: id,
            vegeterian: foodType === "vegeterian",
            nonveg: foodType === "non_vegeterian",
            seasonal: foodType === "seasonal",
            foodCategory: selectedCategory,
        }));
    }, [selectedCategory, foodType, dispatch, id, jwt]);

    useEffect(() => {
        setFilteredMenu(menu.menuItems);
    }, [menu.menuItems]);

    return (
        <div className='text-left px-5 lg:px-20'>
            <section>
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
            <div className="flex">
                <div className="ml-auto text-white p-4">
                <TextField
                id="keyword"
                type="keyword"
                value={keyword}
                onChange={handleInputChange}
            />
            <IconButton onClick={handleSearchFood}>
                <SearchIcon />
            </IconButton>
                </div>
            </div>
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
                                <RadioGroup onChange={handleFilterCategory} name='food_category'>
                                    {restaurant.categories && restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            value={item.name}
                                            control={<Radio />}
                                            label={item.name}
                                            key={item.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {filteredMenu.filter(item => item.available).map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};
