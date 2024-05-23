import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

export const AddressCart = ({item, showButton, handleSelectAddress }) => {
  
 const handleClick=()=>{
  const confirm = window.confirm("Do you want to deliver to this address ? ")
  if(confirm){
    handleSelectAddress(item)
  }
 }

  return (
    <Card className='flex gap-5 w-64 p-5'>
      <HomeIcon />
      <div className='text-left space-y-3 text-gray-500'>
        <p>
        {item.streetAddress}
        </p>
        <p>
        {item.city} 
        </p>
        <p>
        {item.stateProvince}
        </p>
        <p>
         {item.postalCode}
         </p>
         <p>
         {item.country}
         </p>
        {showButton && (
          <Button
            color='primary'
            variant='contained'
            fullWidth
            onClick={() => handleClick()}
          >
            Deliver Here
          </Button>
        )}
      </div>
    </Card>
  )
}
