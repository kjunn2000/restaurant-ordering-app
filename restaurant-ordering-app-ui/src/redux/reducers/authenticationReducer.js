import { setRole } from "../actions/authActions";
import { LOG_OUT, SET_ROLE } from "../actionTypes";

const initialState = {
  role: localStorage.getItem("role") || ""
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      return { ...state, role: action.role };
    case LOG_OUT:
      return { ...state, role: action.role };
    default:
      return state;
  }
};

export default authenticationReducer;
