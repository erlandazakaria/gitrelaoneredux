import { ADD_SUBMITTED_SKILLS } from '../actionTypes';
import { GET_SUBMITTED_SKILLS } from '../actionTypes';
import {REMOVE_SUBMITTED_SKILLS} from '../actionTypes';

export function getSubmittedSkills(){
    let submittednya = { 
                        idSkills: [],
                        idUsers: 1
                    }
    return dispatch => {
            dispatch({
                type: GET_SUBMITTED_SKILLS,
                payload: submittednya 
            })
    }
}

export function addSubmittedSkills(idnya){
    return dispatch => {
        dispatch({
            type: ADD_SUBMITTED_SKILLS,
            payload: idnya 
        })
}
}

export function removeSubmittedSkills(idnya){
    return dispatch => {
        dispatch({
            type: REMOVE_SUBMITTED_SKILLS,
            payload: idnya 
        })
}
}