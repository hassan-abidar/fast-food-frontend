import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { createCategory } from '../../state/Restaurant/Actions';



export const CreateFoodCategoryForm = () => {
    const dispatch= useDispatch();
    const jwt = localStorage.getItem("jwt")
    const [formData,setFormData] = useState({categoryName:"",restaurantId:""})
    const handleSubmit = () => {
        const data = {
            name:formData.categoryName,
            restaurantId:{
                id:1
            }
        }
        
        console.log("data : ",data)
        dispatch(createCategory(data,jwt))
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
                    <TextField fullWidth id='categoryName' name='categoryName' label='Name' variant='outlined'
                        onChange={handleInputChange}
                        value={formData.categoryName}
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
