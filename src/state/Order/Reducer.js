// orderReducer.js

import { 
    CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE,
    GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS, GET_USERS_ORDERS_FAILURE,
    GET_USERS_NOTIFICATION_REQUEST, GET_USERS_NOTIFICATION_SUCCESS, GET_USERS_NOTIFICATION_FAILURE
  } from './ActionTypes';
  
  const initialState = {
    orders: [],
    loading: false,
    error: null
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS_ORDERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case GET_USERS_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: action.payload,
          error:null
        };
  
      case GET_USERS_ORDERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default orderReducer;
  