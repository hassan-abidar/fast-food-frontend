import React, { useEffect, useState } from 'react';
import { OrderCard } from './OrderCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../../state/Order/Action';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Orders = () => {
  const navigate = useNavigate();
  const { auth, cart, order } = useSelector(store => store);

  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');

  const [expandedOrderId, setExpandedOrderId] = useState(null);

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getUsersOrders(jwt));
    }
  }, [auth.jwt, dispatch]);

  const toggleOrder = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>
        My Orders
      </h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          order.orders.map((order) => (
            <div key={order.id} className='order-container p-5 border border-gray-300 rounded-md'>
              <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleOrder(order.id)}>
                <h2 className='text-lg font-medium'>Order ID: {order.id}</h2>
                <p className='text-sm text-gray-500'>{expandedOrderId === order.id ? <RemoveIcon/> : <AddIcon/>}</p>
              </div>
              {expandedOrderId === order.id && (
                <div className='items mt-4 space-y-3'>
                  <p className='text-sm text-gray-500'>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  {
                    order.items.map((item) => (
                      <OrderCard key={item.id} order={order} item={item} />
                    ))
                  }
                </div>
              )}
            </div>
          ))
        }
      </div>
    </div>
  );
};
