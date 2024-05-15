import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../state/Authentification/Action';
import { useNavigate } from 'react-router-dom';

export const UserProfile = () => {
  const {auth} = useSelector(store=>store);
  console.log("auth : ",auth);
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleLogout=()=>{
    dispatch(logout())
    navigate("/")

  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
        <div className='flex flex-col items-center justify-center'>
          <AccountCircleIcon sx={{fontSize:"9rem"}} />

            <h1 className='py-5 text-2xl font-semibold '>
              {auth?.user?.fullName}
            </h1>
            <p>
              Email : {auth?.user?.email}
            </p>
            <h1 className='py-5 text-2xl font-semibold '>
              {auth?.user?.role}
            </h1>
            <Button variant='contained' sx={{margin:"2rem"}} onClick={handleLogout}> 
              Logout
            </Button>

        </div>
    
    </div>
  )
}
