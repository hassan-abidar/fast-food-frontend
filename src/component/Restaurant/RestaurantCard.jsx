import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavroites } from '../../state/Authentification/Action';
import { isPresentInFavorites } from '../Config/logic';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const RestaurantCard = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt =  localStorage.getItem("jwt")
    const {auth} = useSelector(store=>store)
    const handleAddToFavorite=()=>{

        dispatch(addToFavroites({restaurantId:item?.id,jwt}))
        
        
    }
    const handleNavigateToRestaurant = () => {
        if (item.open && item.address && item.address.city) {
            navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`);
        }
    };
    
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
                    <p onClick={handleNavigateToRestaurant} className='text-left font-semibold text-lg cursor-pointer'>
                        {item.name}
                    </p>
                    <p className='text-left text-gray-500 text-sm'>
                        {item.description}
                    </p>
                </div>
                <div>
                    <IconButton onClick={handleAddToFavorite}>
                        {isPresentInFavorites(auth.favorites,item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>

        </Card>
    )
}
