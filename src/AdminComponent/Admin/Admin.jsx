import React from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Orders } from '../Orders/Orders'
import { Menu } from '../Menu/Menu'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import { Events } from '../Events/Events'
import { RestaurantDetails } from './RestaurantDetails'
import { AdminDashboard } from '../Dashboard/AdminDashboard'

export const Admin = () => {
    const handleClose=()=>{

    }
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
              </Routes>
                
            </dir>
        </div>
    </div>
  )
}
