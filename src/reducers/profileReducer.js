import {GET_PROFILE} from '../actionTypes';
import {EDIT_PROFILE} from '../actionTypes';


export default function(state = {}, action){
    switch (action.type){
        case GET_PROFILE:
            return action.payload;
        case EDIT_PROFILE:
            return Object.assign({}, state, { ...action.payload });
        default:
            return state;
            
    }
}