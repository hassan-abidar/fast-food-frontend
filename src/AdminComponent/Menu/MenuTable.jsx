import { Avatar, Box, Button, Card, CardActions, CardHeader, Chip, IconButton } from '@mui/material'
import React, { useEffect, useState, version } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMenuItem, getMenuItemsByRestaurantId, updateMenuItemsAvailability } from '../../state/Menu/Action'


export const MenuTable = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients, menu } = useSelector(store => store);
    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId: restaurant.usersRestaurant.id,
            vegeterian:false,
            nonveg:false ,
            seasonal:false,
            foodCategory: "", 
        }));
    }, [])
    const handleDelete=(foodId)=>{
        const userConfirmed = window.confirm("Do you want to delete this item ?");
        if(userConfirmed){
            dispatch(deleteMenuItem({
                foodId:foodId,
                jwt
            }))
        }
    }
    const updateAvailability =(foodId)=>{
        dispatch(updateMenuItemsAvailability(
            {foodId:foodId,
            jwt}))
    }
    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton aria-label='settings' onClick={() => navigate("/admin/restaurants/add-menu")}>
                            <CreateIcon />
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }}

                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Availibilty</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu.menuItems.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='right' component="th" scope="row">
                                        <Avatar src={item.images[0]}>

                                        </Avatar>
                                    </TableCell>
                                    <TableCell align="left">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="left">
                                         {item.ingredients.map((item)=>
                                            <Chip label={item.name}/>
                                        )} 
                                    </TableCell>
                                    <TableCell align="right">{item.price} MAD</TableCell>
                                    <TableCell align="right">
                                    <Button
                                            variant='contained'
                                            onClick={() => updateAvailability(item.id)}
                                            sx={{
                                                backgroundColor: item.available ? 'green' : 'red',
                                                '&:hover': {
                                                    backgroundColor: item.available ? 'darkgreen' : 'darkred'
                                                }
                                            }}
                                        >
                                            {item.available ? "In Stock" : "Out of Stock"}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton color='red' onClick={()=>handleDelete(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}
