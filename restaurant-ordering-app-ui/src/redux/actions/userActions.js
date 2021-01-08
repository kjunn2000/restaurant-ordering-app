import { SET_CART_ITEMS } from "../actionTypes";

export const setCartItems = (cart) => {
  return {
    type: SET_CART_ITEMS,
    cart,
  };
};
