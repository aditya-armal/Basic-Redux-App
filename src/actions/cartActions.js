import { ADD_ITEM, DELETE_ITEM, EMPTY_ITEM } from '../actionTypes/actionsTypes';

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

const emptyItem = () => {
    return{
        type:EMPTY_ITEM,
    };
};

export { addItem, deleteItem, emptyItem };