import { SET_CART_ITEMS, ADD_CART_ITEM, SET_ORDERS, ADD_ORDER } from "../actionTypes";

const initialState = {
  cart: [],
  order: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return { ...state, cart: action.cart };
    case ADD_CART_ITEM:
      return { ...state, cart: [...state.cart, action.cartItem] };
    case SET_ORDERS:
      return { ...state, order: action.orders };
    case ADD_ORDER:
      return { ...state, order: [...state.order, action.order] };
    default:
      return state;
  }
};

export default userReducer;
