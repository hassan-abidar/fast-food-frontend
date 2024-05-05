import React, { useState } from 'react'
import { ProfileNavigation } from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import { UserProfile } from './UserProfile';
import { Orders } from './Orders';
import { Adresses } from './Adresses';
import { Favorites } from './Favorites';
import { Events } from './Events';

export const Profile = () => {

  const [openSideBar,setOpenSideBar] = useState(false);

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
