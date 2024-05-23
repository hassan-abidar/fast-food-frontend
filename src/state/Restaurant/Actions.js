import {api} from "../../component/Config/api"
import {
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_SUCCESS,
    UPDATE_RESTAURANT_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    GET_RESTAURANT_BY_USER_ID_REQUEST,
    GET_RESTAURANT_BY_USER_ID_SUCCESS,
    GET_RESTAURANT_BY_USER_ID_FAILURE,
    UPDATE_RESTAURANT_STATUS_REQUEST,
    UPDATE_RESTAURANT_STATUS_SUCCESS,
    UPDATE_RESTAURANT_STATUS_FAILURE,
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_EVENTS_FAILURE,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_EVENTS_FAILURE,
    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_EVENTS_FAILURE,
    GET_RESTAURANTS_EVENTS_REQUEST,
    GET_RESTAURANTS_EVENTS_SUCCESS,
    GET_RESTAURANTS_EVENTS_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,
    GET_RESTAURANTS_CATEGORY_REQUEST,
    GET_RESTAURANTS_CATEGORY_SUCCESS,
    GET_RESTAURANTS_CATEGORY_FAILURE,
    EDIT_EVENTS_REQUEST,
    EDIT_EVENTS_SUCCESS,
    EDIT_EVENTS_FAILURE
  } from "./ActionType";

  export const getAllRestaurantsAction=(token)=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_RESTAURANTS_REQUEST});

        try{
            const {data}= await api.get("/api/restaurant",{
                headers: {
                    Authorization:`Bearer ${token}`,
                },
            });
            dispatch({type:GET_ALL_RESTAURANTS_SUCCESS,payload:data});
            console.log("all restaurants : ", data);
        }catch(error){
            console.log("catched error : ",error);
            dispatch({type:GET_ALL_RESTAURANTS_FAILURE,payload:error})
        }
    }
  }
  export const getRestaurantById=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANT_BY_ID_REQUEST});

        try{
            const response = await api.get(`/api/restaurant/${reqData.restaurantId}`,{
                headers: {
                    Authorization:`Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:GET_RESTAURANT_BY_ID_SUCCESS,payload:response.data});
        }catch(error){
            console.log("catched error : ",error);
            dispatch({type:GET_RESTAURANT_BY_ID_FAILURE,payload:error})
        }
    } 
  }
  export const getRestaurantByUserId=(jwt)=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANT_BY_USER_ID_REQUEST});

        try{
            const {data} = await api.get(`/api/admin/restaurant/user`,{
                headers: {
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get restaurant bu user id : ",data)
            dispatch({type:GET_RESTAURANT_BY_USER_ID_SUCCESS,payload:data});
        }catch(error){
            console.log("catched error : ",error);
            dispatch({type:GET_RESTAURANT_BY_USER_ID_FAILURE,payload:error})
        }
    } 
  }
  export const createRestaurant = (reqData) => {
    console.log("token : ",reqData.token)
    return async (dispatch) => {
      dispatch({ type: CREATE_RESTAURANT_REQUEST });
      try {
        const {data} = await api.post("/api/admin/restaurant", reqData.data, {
          headers: {
            Authorization: `Bearer ${reqData.token}`,
          },
        });
        dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
        console.log("created restaurant: ", data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
      }
    };
  };
  export const updateRestaurant = (restaurantId, restaurantData, token) => {
    return async (dispatch) => {
      dispatch({ type: UPDATE_RESTAURANT_REQUEST });
  
      try {
        const response = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data });
        console.log("updated restaurant: ", response.data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
      }
    };
  };
  export const deleteRestaurant = (restaurantId, jwt) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_RESTAURANT_REQUEST });
  
      try {
        const res = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
        dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
        console.log("deleted restaurant with id: ", res.data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
      }
    };
  };
  export const updateRestaurantStatus = (restaurantId, jwt) => {
    return async (dispatch) => {
      dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
  
      try {
        const response = await api.put(`/api/admin/restaurant/${restaurantId}/status`,{}, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data });
        console.log("updated restaurant status: ", response.data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
      }
    };
  };
  export const createEvent = ({eventData, token}) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_EVENTS_REQUEST });
  
      try {
        const response = await api.post(`/api/admin/event`, eventData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: CREATE_EVENTS_SUCCESS, payload: response.data });
        console.log("created event: ", response.data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
      }
    };
  };
  export const editEvent = ({id , eventData, token}) => {
    return async (dispatch) => {
      dispatch({ type: EDIT_EVENTS_REQUEST });
  
      try {
        const response = await api.put(`/api/admin/event/${id}`, eventData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: EDIT_EVENTS_SUCCESS, payload: response.data });
        console.log("EDIT event: ", response.data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: EDIT_EVENTS_FAILURE, payload: error });
      }
    };
  };
  export const getAllEvents = ({token}) => {
    return async (dispatch) => {
      dispatch({ type: GET_ALL_EVENTS_REQUEST });
      try {
        const res = await api.get("/api/admin/event", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
        console.log("all events: ", res.data);
      } catch (error) {
        console.log("caught error events: ", error);
        dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
      }
    };
  };
  export const deleteEventAction = ({eventId, token}) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_EVENTS_REQUEST });
  
      try {
        const res = await api.delete(`/api/admin/event/${eventId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
        console.log("deleted event with id: ", res.data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
      }
    };
  };
  export const getRestaurantsEvents = ({restaurantId, token}) => {
    return async (dispatch) => {
      dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
      console.log("restaurant id",restaurantId)
      console.log("token id",token)

  
      try {
        const { data } = await api.get(`/api/admin/event/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: data });
        console.log("events for restaurant with id ", restaurantId, ": ", data);
      } catch (error) {
        console.log("caught error events: ", error);
        dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });
      }
    };
  };
  export const createCategory = (categoryData, token) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_CATEGORY_REQUEST });
  
      try {
        const response = await api.post("/api/admin/category", categoryData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: response.data });
        console.log("created category: ", response.data);
      } catch (error) {
        console.log("caught error: ", error);
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
      }
    };
  };
  export const getRestaurantsCategory = ({jwt, restaurantId}) => {
    return async (dispatch) => {
      console.log("token cat: ", jwt)
      console.log("restaurantId",restaurantId)
      
      dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
  
      try {
        const { data } = await api.get(`/api/category/restaurant/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: data });
        console.log("categories for restaurant with restaurantId ", restaurantId, ": ", data);
      } catch (error) {
        console.log("caught error in categories: ", error);
        dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error.message });
      }
    };
  };
  
  
  

  
  
  
  
  
  