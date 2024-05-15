// actions.js

import { 
    CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE,
    GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS, GET_USERS_ORDERS_FAILURE,
    GET_USERS_NOTIFICATION_REQUEST, GET_USERS_NOTIFICATION_SUCCESS, GET_USERS_NOTIFICATION_FAILURE,
    GET_USERS_ADRESSES_SUCCESS,GET_USERS_ADRESSES_REQUEST,GET_USERS_ADRESSES_FAILURE
  } from './ActionTypes';
  import { api } from "../../component/Config/api";
  

  export const createOrder = (reqData) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_ORDER_REQUEST });
  
      try {
        const {data} = await api.post('/api/order/create', reqData.order,
    {
        headers:{
            Authorization:`Bearer ${reqData.jwt}`
        }
    });
        console.log("Order created:",data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
      } catch (error) {
        console.error("Failed to create order:", error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
      }
    };
  };
  
  export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
      dispatch({ type: GET_USERS_ORDERS_REQUEST });
      try {
        const {data} = await api.get('/api/order/user',
    {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
    });
        console.log("User's orders fetched:", data);
        dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
      } catch (error) {
        console.error("Failed to fetch user's orders:", error);
        dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
      }
    };
  };

  