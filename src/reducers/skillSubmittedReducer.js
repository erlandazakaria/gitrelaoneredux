import {GET_SUBMITTED_SKILLS} from '../actionTypes';
import {ADD_SUBMITTED_SKILLS} from '../actionTypes';
import {REMOVE_SUBMITTED_SKILLS} from '../actionTypes';


export default function(state = {}, action){
    switch (action.type){
        case GET_SUBMITTED_SKILLS:
            return action.payload;
        case ADD_SUBMITTED_SKILLS:
            return Object.assign({}, state, { idSkills: [...state.idSkills, action.payload] });
        case REMOVE_SUBMITTED_SKILLS:
            console.log("state id skills = ", state.idSkills)
            let indexnya = state.idSkills.indexOf(String(action.payload));
            console.log("indexnya =", indexnya)
            let filter = state.idSkills.filter((_,i) => i !== indexnya);
            console.log(filter)
            return Object.assign({}, state, { idSkills: filter})
        default:
            return state;
    }
}