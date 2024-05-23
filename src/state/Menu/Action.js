import { api } from "../../component/Config/api";
import {
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  CREATE_MENU_ITEM_FAILURE,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  SEARCH_MENU_ITEM_FAILURE,
  UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
  UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
  UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE
} from "./ActionType";

export const createMenuItem = ({menu, jwt}) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });

    try {
      const response = await api.post("/api/admin/food", menu, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: response.data });
      console.log("created menu item: ", response.data);
    } catch (error) {
      console.log("caught error: ", error);
      dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const getMenuItemsByRestaurantId = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });

    try {
      const { data } = await api.get(`/api/food/restaurant/${reqData.restaurantId}?vegeterian=${reqData.vegeterian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&category=${reqData.foodCategory}`, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      console.log("menu items for restaurant with id ", reqData.restaurantId, ": ", data);
      dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("caught error menu: ", error);
      dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
    }
  };
};

export const deleteMenuItem = ({foodId, jwt}) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });

    try {
      await api.delete(`/api/admin/food/${foodId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId });
      console.log("deleted menu item with id: ", foodId);
    } catch (error) {
      console.log("caught error: ", error);
      dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const searchMenuItem = ({keyword, token}) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });

    try {
      const { data } = await api.get(`/api/food/search?name=${keyword}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
      console.log("search results for query '", keyword, "': ", data);
    } catch (error) {
      console.log("caught error: ", error);
      dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const updateMenuItemsAvailability = ({foodId, jwt}) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });

    try {
      const response = await api.put(`/api/admin/food/${foodId}`, {}, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: response.data });
      console.log("updated menu item availability: ", response.data);
    } catch (error) {
      console.log("caught error: ", error);
      dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error });
    }
  };
};
