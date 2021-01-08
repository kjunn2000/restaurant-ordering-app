import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import orderReducer from "./orderReducer";
import menuReducer from "./menuReducer";
import userReducer from "./userReducer";

const combinedReducer = combineReducers({
  auth: authenticationReducer,
  menu: menuReducer,
  order: orderReducer,
  user: userReducer,
});

export default combinedReducer;
