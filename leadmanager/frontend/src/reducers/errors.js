import { GET_ERRORS } from "../actions/types";

const initialState = {
    msg: {},
    status: null
}

export default function(state = initialState, actions){
    switch(actions.type){
        case GET_ERRORS:
            return{
                msg:actions.payload.msg,
                status:actions.payload.status
            }
        default:
            return state;
    }
}