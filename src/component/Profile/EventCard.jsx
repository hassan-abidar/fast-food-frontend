import { CardActions, IconButton } from '@mui/material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteEventAction } from '../../state/Restaurant/Actions';

export const EventCard = ({item,role}) => {
  const token = localStorage.getItem("jwt")
  const dispatch = useDispatch();
  const handleDeleteEvent=(id)=>{
    dispatch(deleteEventAction({eventId:id,token}))
  }
  return (
    <div style={{ textAlign: 'left' }}>
      <Card sx={{ width: 345 }}>
        <CardMedia
        image={item.image}
          sx={{ height: 345 }}
        />

        <CardContent>
          <Typography variant='h5'>
            {item.name}
          </Typography>
          <Typography variant='body2'>
            {item.description}
          </Typography>
          <div className='py-2 space-y-2'>
            <p>
              {item.location}
            </p>
            <p className='text-sm text-blue-500'>
              {item.startedAt}
            </p>
            <p className='text-sm text-red-500'>
              {item.endsAt}
            </p>
          </div>
        </CardContent>
        {role==="owner" && <CardActions>
          <IconButton onClick={()=>handleDeleteEvent(item.id)}>
            <DeleteIcon  />
          </IconButton>
        </CardActions>}
      </Card>
    </div>
  )
}
