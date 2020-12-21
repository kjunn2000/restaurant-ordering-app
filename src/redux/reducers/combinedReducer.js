import {combineReducers} from "redux" ; 
import authenticationReducer from "./authenticationReducer";
import orderReducer from './orderReducer';

const combinedReducer = combineReducers({
    auth:authenticationReducer,
    order:orderReducer
})

export default combinedReducer ;