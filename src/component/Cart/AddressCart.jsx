import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

export const AddressCart = (item,showButton,handleSelectAddress) => {
  return (
    <Card className='flex gap-5 w-64 p-5'>
        <HomeIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-whilte'>
                Home
            </h1>
            <p>
                50 Lotissment Al IKHLASSE, Biougra , 87200, AGADIR, MOROCCO
            </p>
            {showButton && <Button variant='contained' fullWidth onClick={()=>handleSelectAddress(item)}> Select</Button>}
        </div>
    </Card>
  )
}
