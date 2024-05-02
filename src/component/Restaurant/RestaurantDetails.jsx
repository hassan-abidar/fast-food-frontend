import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MenuCard } from './MenuCard';

const categories= [
    "Pizza",
    "Tacos",
    "Tagine",
    "Burger",
    "Fish",
]
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegeterian Only",value:"vegeterian"},
    {label:"Non Vegeterian",value:"non_vegeterian"},
    {label:"Seasonal",value:"seasonal"},
]
const menu = [1,1,1,1,1,1,1]

export const RestaurantDetails = () => {
    const [foodType,setFoodType] = useState("all")
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
    return (
        <div className='text-left px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'> Home/morocco/QueueCuisine/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover'
                                src="https://assets.architecturaldigest.in/photos/64f84cc61d4896b633fba77a/master/w_1600%2Cc_limit/The%2520art%2520deco%2520inspired%2520de%25CC%2581cor%2520of%2520CIRQA%25201960%2520.jpg"
                                alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                alt=""
                                src='https://cdn.vox-cdn.com/uploads/chorus_image/image/62582192/IMG_2025.280.jpg' />
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
                        QueueCuisine
                    </h1>
                    <p className=' text-gray-500 mt-1'>
                        QueueCuisine is not just a restaurant; it's an immersive culinary experience
                        that begins the moment you join the line. Nestled in the heart of the city,
                        QueueCuisine offers a unique concept where waiting becomes part of the enjoyment.
                    </p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span className=''>
                                Hay Alhouda, Agadir
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarMonthIcon />
                            <span>
                                Monday to Sunday : 09:00 AM - 23:00  PM
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
                            <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {foodTypes.map((item)=><FormControlLabel 
                                        value={item.value} 
                                        control={<Radio />} 
                                        label={item.label} 
                                        key={item.value}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {categories.map((item)=><FormControlLabel 
                                        value={item} 
                                        control={<Radio />} 
                                        label={item} 
                                        key={item}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item)=><MenuCard/>)}
                </div>
            </section>
        </div>
    )
}
