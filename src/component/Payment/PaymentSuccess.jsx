import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { green } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PaymentSuccess = () => {
    const navigate = useNavigate()
    return (
        <div className='mini-h-screen px-5 '>
            <div className='flex flex-col items-center justify-center h-[90vh]'>
                <div className='box w-full lg:w-1/4 flex flex-col items-center rounded-md'>
                    <TaskAltIcon sx={{ fontSize: '5rem', color: green[500] }} />
                    <h1 className='py-5 text-2xl font-semibold'>
                        Thank You for Your Order!
                    </h1>
                    <h2>
                        Your delicious meal is on its way!
                    </h2>
                    <p className='py-2 text-center text-gray-200 text-lg'>
                        We're thrilled to let you know that your order has been successfully placed. Our chefs are already busy preparing your food with the freshest ingredients and a whole lot of love.

                        Bon Appétit!

                        Team Krisp
                    </p>
                    <Button onClick={()=>navigate("/")} variant='contained' className='py-5' sx={{margin:"1rem 0rem"}}>
                        Go to HOME
                    </Button>
                </div>
            </div>
        </div>
    )
}
