import {GET_SKILLS} from '../actionTypes';

export default function(state = {}, action){
    switch (action.type){
        case GET_SKILLS:
            return action.payload;
        default:
            return state;
            
    }
}