import { GET_PERSONAJES_SUCCESS } from "./actions";

// ------- REDUCER -----------------

const MyReducer = (state = { users: [] }, action)=>{
    switch (action.type){
        case GET_PERSONAJES_SUCCESS:
            return{
                ...state,
                users: action.users
            }
        default:
            return state;
    }
};

export default MyReducer;