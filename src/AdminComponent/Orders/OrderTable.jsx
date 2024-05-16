import { Box, Card, CardHeader } from '@mui/material'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const orders = [1,1,1,1,1,1,1]

export const OrderTable = () => {
    
  return (
    <Box >
        <Card className='mt-1'>
            <CardHeader
            title={"All Orders"}
            sx={{pt:2,alignItems:"center"}}

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
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="right">{"image"}</TableCell>
              <TableCell align="right">{"Hassan ABIDAR"}</TableCell>
              <TableCell align="right">{"189 DHS"}</TableCell>
              <TableCell align="right">{"Burger"}</TableCell>
              <TableCell align="right">{"Tomato"}</TableCell>
              <TableCell align="right">{"Pending"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Card>  
              
    </Box>
  )
}
