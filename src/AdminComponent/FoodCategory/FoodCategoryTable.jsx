import { Box, Card, CardActions, CardHeader, IconButton, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { CreateFoodCategoryForm } from './CreateFoodCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsCategory } from '../../state/Restaurant/Actions';
import { fetchRestaurantOrder } from '../../state/RestaurantOrder/Action';

const orders = [1, 1, 1, 1, 1, 1, 1]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#191919', // Ensure the background is white
    outline: 'none'
};



export const FoodCategoryTable = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const {restaurant} = useSelector(store=>store);
    const jwt = localStorage.getItem("jwt")

    console.log("restaurant , jwt : ",restaurant,jwt)
    useEffect(()=>{
        console.log("restaurant id :" ,restaurant.usersRestaurant?.id)
        const restaurantId = restaurant.usersRestaurant?.id;
        console.log("jwt : ", jwt)
        dispatch(getRestaurantsCategory(jwt,restaurantId))
        dispatch(fetchRestaurantOrder({
          jwt,
          restaurantId:restaurant.usersRestaurant?.id
        }))
      },[])
    
     


    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label='settings'>
                            <CreateIcon />
                        </IconButton>
                    }
                    title={" Food Category"}
                    sx={{ pt: 2, alignItems: "center" }}

                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurant.categories.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateFoodCategoryForm/>

                </Box>
            </Modal>
        </Box>
    )
}
