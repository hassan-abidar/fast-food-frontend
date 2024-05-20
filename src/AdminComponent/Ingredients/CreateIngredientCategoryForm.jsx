import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createIngredientCategory } from '../../state/Ingredients/Action'
import { useDispatch, useSelector } from 'react-redux'

export const CreateIngredientCategoryForm = () => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {restaurant,ingredients}= useSelector(store=>store)
    const [formData,setFormData] = useState({name:""})
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const categoryData = {name:formData.name,restaurantId:restaurant.usersRestaurant.id}
        dispatch(createIngredientCategory({categoryData,jwt}))
        

    }
    const handleInputChange =(e)=>{
        
        const {name,value}=e.target
        setFormData(
            {
                ...formData,[name]:value
            }
        )
    }
    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray text-center text-xl pb-10'>
                    CREATE CATEGORY
                </h1>
                <form className='space-y-5' onSubmit={handleSubmit} action="">
                    <TextField fullWidth id='name' name='name' label='Category' variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
                    >
                    </TextField>
                <Button fullWidth variant='contained' type='submit'>
                    Create category
                </Button>
                </form>

            </div>
        </div>
    )
}
