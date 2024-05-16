import { Box, Card, CardActions, CardHeader, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const orders = [1, 1, 1, 1, 1, 1, 1]

export const IngredientTable = () => {

    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton aria-label='settings'>
                            <CreateIcon/>
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }}

                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Availibilty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left' component="th" scope="row">
                                        {1}
                                    </TableCell>
                                    <TableCell align="right">{"image"}</TableCell>
                                    <TableCell align="right">{"Hassan ABIDAR"}</TableCell>
                                    <TableCell align="right">{"189 DHS"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}
