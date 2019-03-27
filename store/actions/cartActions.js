import * as actionTypes from "./types";

export const addItemToCart = itemObj => ({
  type: actionTypes.ADD_ITEM,
  payload: itemObj //adds an item object (drink/optopn/quantity)
});

export const removeItemFromCart = itemObj => ({
  type: actionTypes.REMOVE_ITEM,
  payload: itemObj
});

export const checkoutCart = () => ({
  type: actionTypes.CHECKOUT
});
