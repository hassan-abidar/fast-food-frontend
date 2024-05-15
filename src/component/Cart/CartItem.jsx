import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCartItem, updateCartItem } from '../../state/Cart/Action';

export const CartItem = ({item}) => {
    console.log("item selected : ",item)
    const {auth,cart} = useSelector(store=>store)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const handleRemoveCartItem=()=>{
        dispatch(removeCartItem({cartItem:item.id, jwt:jwt}))
    }
    console.log("jwt : ",jwt)

    const handleUpdateCartItem =(value)=>{

        if(value===-1 && item.quantity===1){
            handleRemoveCartItem();
        }
        const data = {cartItemId:item.id,quantity:item.quantity+value}
        dispatch(updateCartItem(data,jwt))

    }
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'> 
        <div>
            <img className='w-[5rem] h-[5rem] object-cover'
                src={item.food.images[0]}
                alt="" />
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
            <div className='space-y-1 lg:space-y-3 w-full'>
                <p className='flex'>
                    {item.food.name}
                </p>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-1'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                            <IconButton onClick={()=>handleUpdateCartItem(-1)}>
                            <RemoveCircleIcon/>
                            </IconButton>
                            <div className='w-5 h-5 flex items-center justify-center'>
                            {item.quantity}
                        </div>
                        <IconButton onClick={()=>handleUpdateCartItem(1)}>
                            <AddCircleIcon/>
                            </IconButton>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
            <p className='font-bold'>
            {item.totalPrice} MAD
            </p>
        </div>
    </div>
    <div className='flex pt-3 space-x-2'>
            {item.ingredients.map((ingredient)=> <Chip label={ingredient}/>)}
    </div>

    </div>
    
  );
}
