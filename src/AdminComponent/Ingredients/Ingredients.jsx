import React from 'react'
import { IngredientTable } from './IngredientTable'
import { Grid } from '@mui/material'
import { IngredientsCategoryTable } from './IngredientsCategoryTable'

export const Ingredients = () => {
  return (
    <div  className='px-2'>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={7}>
          <IngredientTable/>
          </Grid>
          <Grid item xs={12} lg={5}>
          <IngredientsCategoryTable/>
          </Grid>
        </Grid>
    </div>
  )
}
