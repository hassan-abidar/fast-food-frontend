// actions.js

import { 
    GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, GET_RESTAURANTS_ORDER_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE
  } from './ActionTypes';
  import { api } from "../../component/Config/api";
  
  export const fetchRestaurantOrder = (restaurantId,orderStatus,jwt) => {
    return async (dispatch) => {
      dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
      console.log("Fetching restaurant orders...");
  
      try {
        const response = await api.get(`/api/admin/order/restaurant/${restaurantId}`,
    {params:{order_status:orderStatus},
    headers: {
        Authorization: `Bearer ${jwt}`,
    }
});
        console.log("Restaurant orders fetched:", response.data);
  
        dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: response.data });
      } catch (error) {
        console.error("Failed to fetch restaurant orders:", error);
        dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error });
      }
    };
  };
  
  export const updateOrderStatus = (orderId, newStatus,jwt) => {
    return async (dispatch) => {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
      console.log("Updating order status...");
  
      try {
        const response = await api.put(`/api/admin/orders/${orderId}/${newStatus}`,
         {},{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
         });
         
        console.log("Order status updated:", response.data);
  
        dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: response.data });
      } catch (error) {
        console.error("Failed to update order status:", error);
        dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error });
      }
    };
  };
  