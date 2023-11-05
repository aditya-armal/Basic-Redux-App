import { ADD_ITEM, DELETE_ITEM, EMPTY_ITEM } from "../actionTypes/actionsTypes";

const initialState = {
  numOfItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };
    case EMPTY_ITEM:
      return {
        numOfItems: 0,
      };
    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems > 0 ? state.numOfItems - 1 : 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
