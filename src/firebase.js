import * as firebase from 'firebase'

    var config = {  
        apiKey: "AIzaSyAcnDF9xZ9A33SJPuFYgJ_mckFtpZHOdik",
        authDomain: "relaoneredux.firebaseapp.com",
        databaseURL: "https://relaoneredux.firebaseio.com",
        projectId: "relaoneredux",
        storageBucket: "relaoneredux.appspot.com",
        messagingSenderId: "95847978349"
    };
    firebase.initializeApp(config);

export const database = firebase.database()