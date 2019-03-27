import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  quantity: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      cartItems = state.items;
      let cartItemIncrement = cartItems.find(
        cartItem =>
          action.payload.drink === cartItem.drink &&
          action.payload.option === cartItem.option
      );
      if (cartItemIncrement) {
        cartItemIncrement.quantity =
          cartItemIncrement.quantity + action.payload.quantity;
        return {
          ...state,
          items: [...state.items],
          quantity: state.quantity + 1
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          quantity: state.quantity + 1
        };
      }

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
        quantity: state.quantity - action.payload.quantity
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
