import { LOGIN, SIGNUP } from "./ActionTypes";

const initialState = {
    token: '',
    userDetails: []
}

const reducerFunction = (state=initialState,action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, 
                token: action.payload
            }
            case SIGNUP:
                return {
                    ...state,
                    userDetails: [...state.userDetails, action.payload]                    
                }
        default:
            return state
    }
}
export default reducerFunction