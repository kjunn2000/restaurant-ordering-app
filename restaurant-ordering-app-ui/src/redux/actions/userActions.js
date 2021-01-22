import { SET_CART_ITEMS, ADD_CART_ITEM, SET_ORDERS,ADD_ORDER } from "../actionTypes";

export const setCartItems = (cart) => {
  return {
    type: SET_CART_ITEMS,
    cart,
  };
};

export const addCartItem = (cartItem) => {
  return {
    type: ADD_CART_ITEM,
    cartItem,
  };
};


export const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders,
  };
};

export const addOrder = (order) => {
  return {
    type: ADD_ORDER,
    order,
  };
};
