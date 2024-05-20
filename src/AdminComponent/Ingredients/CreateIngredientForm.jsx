import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient, createIngredientCategory } from '../../state/Ingredients/Action';

export const CreateIngredientForm = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients } = useSelector(store => store);
    const [formData, setFormData] = useState({ name: "", categoryId: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredientData = {
            ...formData,
            restaurantId: restaurant.usersRestaurant.id
        };
        console.log("ingredientData",ingredientData)
        dispatch(createIngredient({ ingredientData, jwt }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray text-center text-xl pb-10'>
                    CREATE INGREDIENT
                </h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label='Name'
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            name='categoryId'
                            labelId="category-label"
                            id="category-select"
                            value={formData.categoryId}
                            label="Category"
                            onChange={handleInputChange}
                        >
                            {ingredients.category.map((item) =>
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Button fullWidth variant='contained' type='submit'>
                        Create ingredient
                    </Button>
                </form>
            </div>
        </div>
    );
};
