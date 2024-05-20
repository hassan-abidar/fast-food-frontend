import React, { useEffect } from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Orders } from '../Orders/Orders'
import { Menu } from '../Menu/Menu'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import { Events } from '../Events/Events'
import { RestaurantDetails } from './RestaurantDetails'
import { AdminDashboard } from '../Dashboard/AdminDashboard'
import { CreateMenuForm } from '../Menu/CreateMenuForm'
import { CreateFoodCategoryForm } from '../FoodCategory/CreateFoodCategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantsCategory } from '../../state/Restaurant/Actions'
import { getMenuItemsByRestaurantId } from '../../state/Menu/Action'
import { getUsersOrders } from '../../state/Order/Action'
import { fetchRestaurantOrder } from '../../state/RestaurantOrder/Action'

export const Admin = () => {
  const dispatch = useDispatch();
  const {restaurant} = useSelector(store=>store)
  const jwt = localStorage.getItem("jwt")
    const handleClose=()=>{

    }
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
    <div>
        <div className='lg:flex justify-between'>
            <div>
                <AdminSideBar handleClose={handleClose}/>
            </div>
            <dir className='lg:w-[80%]'>
              <Routes>
                <Route path='/' element={<AdminDashboard/>} />
                <Route path='/orders' element={<Orders/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/category' element={<FoodCategory/>} />
                <Route path='/ingredients' element={<Ingredients/>} />
                <Route path='/event' element={<Events/>} />
                <Route path='/details' element={<RestaurantDetails/>} />
                <Route path='/add-menu' element={<CreateMenuForm/>} />                
              </Routes>
                
            </dir>
        </div>
    </div>
  )
}
