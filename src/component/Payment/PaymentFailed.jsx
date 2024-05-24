import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PaymentFailed = () => {
    const navigate = useNavigate()
    return (
        <div className='mini-h-screen px-5 '>
            <div className='flex flex-col items-center justify-center h-[90vh]'>
                <div className='box w-full lg:w-1/4 flex flex-col items-center rounded-md'>
                    <ErrorOutlineIcon sx={{ fontSize: '5rem', color: red[500] }} />
                    <h1 className='py-5 text-2xl font-semibold'>
                    Oops! Something Went Wrong with Your Payment
                    </h1>
                    <h2>
                    We couldn't process your order.
                    </h2>
                    <p className='py-2 text-center text-gray-200 text-lg'>
                    It looks like there was an issue with your payment.
                    </p>
                    <Button onClick={()=>navigate("/")} variant='contained' className='py-5' sx={{margin:"1rem 0rem"}}>
                        Go to HOME
                    </Button>
                </div>
            </div>
        </div>
    )
}
