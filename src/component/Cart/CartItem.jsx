import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'> 
        <div>
            <img className='w-[5rem] h-[5rem] object-cover'
                src="https://asset.kompas.com/crops/fP_Q5TD9BOn5G5JTnntgtDIjQMI=/53x36:933x623/750x500/data/photo/2021/10/21/6171492e1ea12.jpg" 
                alt="" />
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
            <div className='space-y-1 lg:space-y-3 w-full'>
                <p className='flex'>
                    Burger
                </p>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-1'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                            <IconButton>
                            <RemoveCircleIcon/>
                            </IconButton>
                            <div className='w-5 h-5 flex items-center justify-center'>
                            {5}
                        </div>
                        <IconButton>
                            <AddCircleIcon/>
                            </IconButton>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
            <p className='font-bold'>
            38 MAD
            </p>
        </div>
    </div>
    <div className='flex pt-3 space-x-2'>
            {[1,1,1].map((item)=> <Chip label={"bread"}/>)}
    </div>

    </div>
    
  );
}
