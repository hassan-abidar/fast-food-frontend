import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = ({ item }) => {
    return (
        <Card className='w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover'
                    src={item.images[0]}
                    alt="" />
                <Chip size='small'
                    className='absolute top-2 left-2'
                    color={item.open ? "success" : "error"}
                    label={item.open ? "open" : "closed"}
                />
            </div>
            <div className='p-4 textPart flex justify-between'>
                <div className='space-y-1'>
                    <p className='text-left font-semibold text-lg'>
                        {item.name}
                    </p>
                    <p className='text-left text-gray-500 text-sm'>
                        {item.description}
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                </div>
            </div>

        </Card>
    )
}
