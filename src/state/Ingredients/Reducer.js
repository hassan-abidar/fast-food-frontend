import { 
  CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, CREATE_INGREDIENT_FAILURE,
  CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_CATEGORY_FAILURE,
  GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE,
  GET_INGREDIENTS,
  UPDATE_STOCK
} from './ActionTypes';

const initialState = {
  ingredients: [],
  category: [], // Make sure the key name is consistent
  update: null
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_INGREDIENTS:
          return {
              ...state,
              ingredients: action.payload
          };

      case CREATE_INGREDIENT_SUCCESS:
          return {
              ...state,
              ingredients: [...state.ingredients, action.payload]
          };

      case CREATE_INGREDIENT_CATEGORY_SUCCESS:
          return {
              ...state,
              category: [...state.category, action.payload]
          };

      case GET_INGREDIENT_CATEGORY_SUCCESS:
          return {
              ...state,
              category: action.payload
          };

      case UPDATE_STOCK:
          return {
              ...state,
              update: action.payload,
              ingredients: state.ingredients.map((item) =>
                  item.id === action.payload.id ? action.payload : item
              ),
          };

      // Optionally handle request and failure actions to set loading/error states
      case CREATE_INGREDIENT_REQUEST:
      case CREATE_INGREDIENT_FAILURE:
      case CREATE_INGREDIENT_CATEGORY_REQUEST:
      case CREATE_INGREDIENT_CATEGORY_FAILURE:
      case GET_INGREDIENT_CATEGORY_REQUEST:
      case GET_INGREDIENT_CATEGORY_FAILURE:
          return {
              ...state,
              // Optionally add loading or error state handling here
          };

      default:
          return state;
  }
};

export default ingredientReducer;
