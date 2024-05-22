import React, { useEffect } from 'react'
import { EventCard } from './EventCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents, getAllRestaurantsAction } from '../../state/Restaurant/Actions'

export const Events = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("jwt")
  const {restaurant} = useSelector(store=>store)
  console.log("restaurant : ",restaurant)
  useEffect(()=>{
    dispatch(getAllRestaurantsAction(token))
    dispatch(getAllEvents({token}))
  },[])
  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>
       {restaurant.events.map((item)=><EventCard item={item} role={"customer"}/>)}  
    </div>
  )
}
