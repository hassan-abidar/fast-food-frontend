
import { 
    FIND_CART_REQUEST, FIND_CART_SUCCESS, FIND_CART_FAILURE,
    CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, CLEAR_CART_FAILURE,
    GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, GET_ALL_CART_ITEMS_FAILURE,
    ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, ADD_ITEM_TO_CART_FAILURE,
    UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE,
    REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, REMOVE_CARTITEM_FAILURE
  } from './ActionType';
  import { api } from "../../component/Config/api";

  
  export const findCart = (token) => {
    return async (dispatch) => {
      dispatch({ type: FIND_CART_REQUEST });
  
      try {
        const response = await api.get(`/api/cart`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
  
        dispatch({ type: FIND_CART_SUCCESS, payload: response.data }); 
        console.log("my cart : ", response.data)
      } catch (error) {
        dispatch({ type: FIND_CART_FAILURE, payload: error });
      }
    };
  };
  
  export const clearCart = () => {
    return async (dispatch) => {
      dispatch({ type: CLEAR_CART_REQUEST });
  
      try {
        const {data} = await api.put(`/api/cart/clear`,{},{
          headers:
          {
            Authorization:`Bearer ${localStorage.getItem("jwt")}`,
          }
        })
        dispatch({ type: CLEAR_CART_SUCCESS,payload:data });
        console.log("Cleared cart : ",data);
      } catch (error) {
        dispatch({ type: CLEAR_CART_FAILURE, payload: error.message });
        console.log("Caught error : ",error);
      }
    };
  };

  export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
      dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
  
      try {
        const response= await api.get(`/api/carts/${reqData.cartId}/items`
        ,{
            headers:{
                Authorization:`Bearer ${reqData.token}`,
            }
        }
    );
  
        dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data }); 
      } catch (error) {
        dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
      }
    };
  };
  
export const addItemToCart = (reqData) => {
    return async (dispatch) => {
      dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  
      try {
        const response= await api.put(`/api/cart/add`,reqData.cartItem,
        {
            headers:{
                Authorization:`Bearer ${reqData.token}`,
            }
        });
  
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: response.data });
        console.log("item added to cart : ", response.data)
      } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
      }
    };
  };
  
  
  export const updateCartItem = (reqData,jwt) => {
    return async (dispatch) => {
      dispatch({ type: UPDATE_CARTITEM_REQUEST });
      console.log("jwt : ",jwt)
      console.log("reqData : " , reqData)
  
      try {
        const response= await api.put(`/api/cart-item/update`,reqData,
        {
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
  
        dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("caught error : ", error)
        dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error });
      }
    };
  };
  
  export const removeCartItem = (itemId,jwt) => {
    return async (dispatch) => {
      dispatch({ type: REMOVE_CARTITEM_REQUEST });
  
      try {
        const {data}= await api.delete(`/api/cart-item/${itemId}/remove`,
        {
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
  
        dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: itemId });
      } catch (error) {
        dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error.message });
      }
    };
  };
  