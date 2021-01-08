import { SET_ROLE, LOG_OUT, SET_MENU } from "../actionTypes";

export const setRole = (role) => {
  return {
    type: SET_ROLE,
    role: role,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
    role: "",
  };
};

export const setAllMenu = (menu) => {
  return {
    type: SET_MENU,
    menu,
  };
};

