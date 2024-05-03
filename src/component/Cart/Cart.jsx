import { Divider } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'
import { AddressCart } from './AddressCart'

const items = [1,1,1]

export const Cart = () => {
  const createOrderUsingSelectedAddress =()=>{
    
  }
  return (
    <div>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
            { items.map((item)=>(<CartItem/>))}
            <Divider/> 
            <div className='billlDetails px-5 text-sm '>
              <p className='font-extralight py-5'>
                Bill Details
              </p>
              <div className='space-y-3'>
                <div className='flex justify-between text-gray-400'>
                  <p>
                    Item Total
                  </p>
                  <p>
                    114 MAD
                  </p>
                </div>
                <div className='flex justify-between text-gray-400'>
                  <p>
                    Deliver Free
                  </p>
                  <p>
                    14 MAD
                  </p>
                </div>
                <div className='flex justify-between text-gray-400'>
                  <p>
                    Restaurant Charges
                  </p>
                  <p>
                    20 MAD
                  </p>
                </div>
                <Divider/>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>
                  Total to pay
                </p>
                <p>
                  148 MAD
                </p>

              </div>
            </div>
            </section>
            <Divider orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 '>
              <div>
                <h1 className='text-center font-semibold text-2xl py-10'>
                  Choose Delivery Address</h1>
                  <div className='flex gap-5 flex-wrap justify-center'>
                      {[1,1,1,1].map((item)=>(<AddressCart handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton= {true}/>))}
                  </div>
              </div>
            </section>
        </main>
    </div>
  )
}
