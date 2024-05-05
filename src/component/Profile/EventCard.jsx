import { CardActions, IconButton } from '@mui/material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Card sx={{ width: 345 }}>
        <CardMedia
        image='https://images.pexels.com/photos/2067432/pexels-photo-2067432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          sx={{ height: 345 }}
        />

        <CardContent>
          <Typography variant='h5'>
            Coffee Tasting Event
          </Typography>
          <Typography variant='body2'>
            Discover the finest coffees from around the world.
          </Typography>
          <div className='py-2 space-y-2'>
            <p>
              {"Coffee Barista, Downtown"}
            </p>
            <p className='text-sm text-blue-500'>
              Saturday, May 10, 2024, 10:00 AM
            </p>
            <p className='text-sm text-red-500'>
              Sunday, May 11, 2024, 2:00 PM
            </p>
          </div>
        </CardContent>
        {true && <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>}
      </Card>
    </div>
  )
}
