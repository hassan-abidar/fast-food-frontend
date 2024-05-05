import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16'
            src='https://cdn.sanity.io/images/p6oh2x2n/production/c86a468be5f6ea5938ea94eb74557fcedb899dee-1920x1080.jpg?w=1920&h=1080&auto=format'
            alt=''
            />
            <div>
                <p>
                    Cheese Burger
                </p>
                <p>
                    37 MAD
                </p>
            </div>
        </div> 
        <div>
            <Button disabled className='cursor-not-allowed'>  
                Pending
            </Button>
         </div>    
    </Card>
  )
}
