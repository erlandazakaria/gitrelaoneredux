import { GET_PROFILE } from '../actionTypes'
import { EDIT_PROFILE } from '../actionTypes'
import { SAVE_PROFILE } from '../actionTypes'
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
            temporaryPic: isiField
        };
    }
    return dispatch => {
        dispatch({
            type: EDIT_PROFILE,
            payload: ayolah
        })
    }
}

export function saveProfile(session_id, file, semua){
    return dispatch => {
        const cloudImgUrl = "https://res.cloudinary.com/rela0netest/image/upload/v1545028719/" + session_id;
        const updateIdUrl = "https://stagingrelaone.herokuapp.com/api/v1/profile/update?id=" + session_id;
        let datas = new FormData()
        datas.append('tags', 'browser_upload'); 
        datas.append('upload_preset', 'as8qoqhe');
        datas.append('public_id', String(session_id));
        datas.append('file', file, file.name);
        

        fetch('https://api.cloudinary.com/v1_1/rela0netest/image/upload', {
            method: 'POST',
            body: datas
        }).then(res => {
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
        console.log(semua)
        console.log(semua.pic)
        let pushProfile = {
            identity_number: semua.identity_number,
            first_name: semua.first_name,
            last_name: semua.last_name,
            role_id: semua.role_id,
            pic: cloudImgUrl,
            email: semua.email,
            id: semua.id
        }
        fetch(updateIdUrl, {
            method: 'PUT',
            headers: {
                // 'Accept': 'application/json; charset=UTF-8',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                identity_number: semua.identity_number,
                first_name: semua.first_name,
                last_name: semua.last_name,
                pic: cloudImgUrl,
                password: "abcdefghij"
            })
        })

        dispatch({
                    type: SAVE_PROFILE,
                    payload: pushProfile
        });


    }
}