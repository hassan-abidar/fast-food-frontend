import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { MenuTable } from '../Menu/MenuTable'
import { OrderTable } from '../Orders/OrderTable'

export const AdminDashboard = () => {
  const filterValue = "all"; 

  return (
    <div>
      <Grid container  spacing={2}>
        <Grid item lg={12}>
          <MenuTable/>
        </Grid>
        <Grid item lg={12}>
          <OrderTable filterValue={filterValue}/>
        </Grid>
      </Grid>
    </div>
  )
}
