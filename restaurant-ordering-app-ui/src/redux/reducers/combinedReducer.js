import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import orderReducer from "./orderReducer";
import menuReducer from "./menuReducer";

const combinedReducer = combineReducers({
  auth: authenticationReducer,
  menu: menuReducer,
  order: orderReducer,
});

export default combinedReducer;
