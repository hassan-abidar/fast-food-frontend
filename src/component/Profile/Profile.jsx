import React, { useEffect, useState } from 'react'
import { ProfileNavigation } from './ProfileNavigation'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserProfile } from './UserProfile';
import { Orders } from './Orders';
import { Adresses } from './Adresses';
import { Favorites } from './Favorites';
import { Events } from './Events';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../../state/Order/Action';

export const Profile = () => {

  const [openSideBar,setOpenSideBar] = useState(false);
  const {auth,cart} = useSelector(store=>store)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  useEffect(()=>{
      dispatch(getUsersOrders(jwt))
  },[auth.jwt])

  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>

        </div>
        <div className='lg:w-[80%]'>
            <Routes>
              <Route path='/' element={<UserProfile/>}/>
              <Route path='/orders' element={<Orders/>}/>
              <Route path='/addresses' element={<Adresses/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/events' element={<Events/>}/>

            </Routes>
        </div>
    </div>
  )
}
