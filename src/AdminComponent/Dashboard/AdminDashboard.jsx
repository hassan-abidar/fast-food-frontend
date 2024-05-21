import { Grid } from '@mui/material'
import React from 'react'
import { MenuTable } from '../Menu/MenuTable'
import { OrderTable } from '../Orders/OrderTable'

export const AdminDashboard = () => {
  return (
    <div>
      <Grid container  spacing={2}>
        <Grid item lg={12}>
          <MenuTable/>
        </Grid>
        <Grid item lg={12}>
          <OrderTable/>
        </Grid>
      </Grid>
    </div>
  )
}
