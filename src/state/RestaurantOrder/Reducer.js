// restaurantOrderReducer.js

import { 
    GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, GET_RESTAURANTS_ORDER_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE
  } from './ActionTypes';
  
  const initialState = {
    orders: [],
    loading: false,
    error: null
  };
  
  const restaurantsOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RESTAURANTS_ORDER_REQUEST:
      case UPDATE_ORDER_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case GET_RESTAURANTS_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: action.payload
        };
  
      case UPDATE_ORDER_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: state.orders.map(order =>
            order.id === action.payload.id ? action.payload : order
          )
        };
  
      case GET_RESTAURANTS_ORDER_FAILURE:
      case UPDATE_ORDER_STATUS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  export default restaurantsOrderReducer;
  