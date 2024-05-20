import { AddPhotoAlternate, Facebook } from '@mui/icons-material'
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from '../Admin/util/UploadToCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { createMenuItem } from '../../state/Menu/Action';
import { getIngredientsOfRestaurant } from '../../state/Ingredients/Action';


const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    restaurantId: "",
    vegeterian: true,
    seasonal: false,
    ingredients: [],
    images: []
}


export const CreateMenuForm = () => {
    const [uploadImage, setUploadImage] = useState(false)
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients } = useSelector(store => store);
    const formik = useFormik(
        {
            initialValues,
            onSubmit: (values) => {
                values.restaurantId = 1
                console.log("values provided : ", values)
                dispatch(createMenuItem({menu:values,jwt}))
            }
        }
    )
    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setUploadImage(true)
        const image = await uploadImageToCloudinary(file)
        formik.setFieldValue("images", [...formik.values.images, image])
        setUploadImage(false)
    }
    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images]
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages)
    }
    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({ jwt, id: restaurant.usersRestaurant.id }))
    }, [])
    return (
        <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
            <div className='lg:max-w-4xl'>
                <h1 className='font-bold text-2xl text-center py-2'>
                    ADD NEW MENU
                </h1>
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    <Grid container spacing={2}>
                        <Grid className='flex flex-wrap gap-5' item xs={12}>
                            <input
                                accept='image/'
                                id='fileInput'
                                type="file"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />
                            <label className='relative' htmlFor="fileInput">
                                <span className='w-24 h-24 cursor-pointer flex items-center 
              justify-center p-3 border rounded-md border-gray-600'>
                                    <AddPhotoAlternateIcon className="text-white" />
                                </span>
                                {
                                    uploadImage &&
                                    <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                        <CircularProgress />
                                    </div>
                                }
                            </label>
                            <div className='flex flex-wrap gap-2 '>
                                {formik.values.images.map((image, index) =>
                                    <div className='relative'>
                                        <img className='w-24 h-24 object-cover'
                                            key={index}
                                            src={image}
                                            alt='' />
                                        <IconButton
                                            size='small'
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                outlined: "none"
                                            }}

                                            onClick={() => handleRemoveImage(index)}>
                                            <CloseIcon sx={{ fontSize: "1rem" }} />
                                        </IconButton>
                                    </div>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id='name' name='name' label='Name' variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id='description' name='description' label='Description' variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth id='price' name='price' label='Price' variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    name='category'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.category}
                                    label="Age"
                                    onChange={formik.handleChange}
                                >
                                    {restaurant.categories.map((item)=><MenuItem value={item}>{item.name}</MenuItem>)}
                                    
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth >
                                <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    name='ingredients'
                                    multiple
                                    value={formik.values.ingredients}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value.id} label={value.name} />
                                            ))}
                                        </Box>
                                    )}
                                //MenuProps={MenuProps}
                                >
                                    {ingredients.ingredients?.map((item, index) => (
                                        <MenuItem
                                            key={item.id}
                                            value={item}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Vegeterian</InputLabel>
                                <Select
                                    name='vegeterian'
                                    labelId="demo-simple-select-label"
                                    id="vegeterian"
                                    value={formik.values.vegeterian}
                                    label="Vegeterian"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Seasonal</InputLabel>
                                <Select
                                    name='seasonal'
                                    labelId="demo-simple-select-label"
                                    id="seasonal"
                                    value={formik.values.seasonal}
                                    label="Seasonal"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button fullWidth className='mt-4' variant='contained' type='submit'>
                        Create menu
                    </Button>
                </form>
            </div>
        </div>
    )
}
