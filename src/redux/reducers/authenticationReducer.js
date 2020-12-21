import { SET_AUTHENTICATED } from "../actionTypes";

const initialState = {
    isAuthenticated: false
}

const authenticationReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_AUTHENTICATED: 
            return {...state,isAuthenticated:!state.isAuthenticated};
        default : 
            return state ; 
    }
}

export default authenticationReducer
