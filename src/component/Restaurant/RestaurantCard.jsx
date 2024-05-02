import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>
        <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover'
            src="https://assets.architecturaldigest.in/photos/64f84cc61d4896b633fba77a/master/w_1600%2Cc_limit/The%2520art%2520deco%2520inspired%2520de%25CC%2581cor%2520of%2520CIRQA%25201960%2520.jpg" alt="" />
            <Chip size='small'
            className='absolute top-2 left-2'
            color={true?"success":"error"}
            label={true?"open":"closed"}
            />
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>
                QueueCuisine
                </p>
                <p className='text-gray-500 text-sm'>
                Indulge in Flavor, Queue for Culinary Adventure!
                </p>
            </div>
            <div>
                <IconButton>
                    {true?<Favorite/>:<FavoriteBorder/>}
                </IconButton>
            </div>
        </div>
    </Card>
  )
}
