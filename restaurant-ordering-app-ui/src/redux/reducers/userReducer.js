import { SET_CART_ITEMS } from "../actionTypes";

const initialState = {
  cart: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return { ...state, cart: action.cart };
    default:
      return state;
  }
};

export default userReducer;
