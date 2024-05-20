// actions.js

import { 
    CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, CREATE_INGREDIENT_FAILURE,
    CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENTS,
    GET_INGREDIENTS_FAILURE,
    UPDATE_STOCK
  } from './ActionTypes';
  import { api } from "../../component/Config/api";

  export const getIngredientsOfRestaurant = ({id, jwt}) => {
    return async (dispatch) => {
      try {
        
        const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, 
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        console.log("Fetched ingredients :", response.data);
  
        dispatch({ type: GET_INGREDIENTS, payload: response.data });
      } catch (error) {
        console.error("Failed to fetch ingredient:", error);
        dispatch({ type: GET_INGREDIENTS_FAILURE, payload: error });
      }
    };
  };
  
  export const createIngredient = ({ingredientData, jwt}) => {
    return async (dispatch) => {
        try {
        const response = await api.post('/api/admin/ingredients', ingredientData, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        console.log("Ingredient created:", response.data);
  
        dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: response.data });
      } catch (error) {
        console.error("Failed to create ingredient:", error);
      }
    };
  };
 export const createIngredientCategory = ({categoryData, jwt}) => {
    console.log("data ",categoryData," jwt :" ,jwt);
    return async (dispatch) => {
      try {
        const response = await api.post('/api/admin/ingredients/category', categoryData, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        console.log("Ingredient category created:", response.data);
  
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
      } catch (error) {
        console.error("Failed to create ingredient category:", error);
        //dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error });
      }
    };
  };
  
  export const getIngredientCategories = ({id,jwt}) => {
    return async (dispatch) => {
       dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });
     console.log("Fetching ingredient categories...");
      try {
        const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        console.log("Ingredient categories fetched:", response.data);
  
        dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
      } catch (error) {
        console.error("Failed to fetch ingredient categories:", error);
       }
    };
  };
  export const updateStock = ({ id, jwt }) => {
    return async (dispatch) => {
      try {
        console.log("id , jwt", id, jwt);
        const response = await api.put(
          `/api/admin/ingredients/${id}/stock`,
          {}, 
          {
            headers: {
              Authorization: `Bearer ${jwt}`
            }
          }
        );
        console.log("Stock updated:", response.data);
  
        dispatch({ type: UPDATE_STOCK, payload: response.data });
      } catch (error) {
        console.error("Failed to update stock:", error);
      }
    };
  };
  
  
  