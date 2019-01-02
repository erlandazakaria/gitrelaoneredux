import { GET_PROFILE } from '../actionTypes'
import { EDIT_PROFILE } from '../actionTypes'
// import { database } from '../firebase'

export function getProfile(session_id){
    let UrlPlusSessionId = 'https://stagingrelaone.herokuapp.com/api/v1/profile/show?id=' + session_id;
    return dispatch => {
        const urlFetchProfile = fetch(UrlPlusSessionId)
        urlFetchProfile.then( resProfile => {
            if(resProfile.status === 200)
                return resProfile.json()
        }).then( resJsonProfile => {
            dispatch({
                type: GET_PROFILE,
                payload: resJsonProfile.results 
            })
            // let datax = resJsonProfile.results;
        })
        // database.ref('profile').on('value', snapshot => {
        //     dispatch({
        //         type: GET_PROFILE,
        //         payload: snapshot.val()
        //     })
        // })  
    }
}

export function editProfile(namaField, isiField){
    let ayolah = {}
    if(namaField==="first_name"){
        ayolah = {
            first_name: isiField
        };
    }
    else if(namaField==="last_name"){
        ayolah = {
            last_name: isiField
        };
    }
    else if(namaField==="pic"){
        ayolah = {
            pic: isiField
        };
    }
    console.log(namaField)
    return dispatch => {
        dispatch({
            type: EDIT_PROFILE,
            payload: ayolah
        })
    }
}