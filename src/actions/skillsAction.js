import { GET_SKILLS } from '../actionTypes';

export function getSkills(){
    return dispatch => {
        const urlSkills = fetch('https://stagingrelaone.herokuapp.com/api/v1/skills')
        urlSkills.then( resSkills => {
            if(resSkills.status === 200)
                return resSkills.json()
        }).then( resJsonSkills => {
            dispatch({
                type: GET_SKILLS,
                payload: resJsonSkills.results 
            })
        })  
    }
}
