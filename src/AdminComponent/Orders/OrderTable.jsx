import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantOrder, updateOrderStatus } from '../../state/RestaurantOrder/Action';

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Out for delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

export const OrderTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, restaurantOrder, ingredients, menu } = useSelector(store => store);

  useEffect(() => {
    dispatch(fetchRestaurantOrder({
      jwt,
      restaurantId: restaurant.usersRestaurant?.id,
    }));
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleUpdateOrder = (orderId, newStatus, jwt) => {
    dispatch(updateOrderStatus({ orderId, newStatus, jwt }));
    handleClose();
  };

  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          title={"All Orders"}
          sx={{ pt: 2, alignItems: "center" }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantOrder.orders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">
                    <AvatarGroup>
                      {row.items.map((orderItem) => <Avatar src={orderItem.food?.images[0]} />)}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="right">{row.customer?.fullName}</TableCell>
                  <TableCell align="right">{row.totalPrice} MAD</TableCell>
                  <TableCell align="right">
                    {row.items.map((orderItem) => <p>{orderItem.food?.name}</p>)}
                  </TableCell>
                  <TableCell align="right">
                    {row.items.map((orderItem) => (
                      <div>
                        {orderItem.ingredients.map((ingredient) => (
                          <Chip key={ingredient.id} label={ingredient} />
                        ))}
                      </div>
                    ))}
                  </TableCell>

                  <TableCell align="right">{row.orderStatus}</TableCell>
                  <TableCell align="right">
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      Update
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      {orderStatus.map((status) => (
                        <MenuItem key={status.value} onClick={() => handleUpdateOrder(selectedOrderId, status.value, jwt)}>
                          {status.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};
