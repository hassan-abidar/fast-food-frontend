import React from 'react'
import { AdminSideBar } from './AdminSideBar'

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
                
            </dir>
        </div>
    </div>
  )
}
