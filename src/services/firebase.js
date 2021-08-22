import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD97t1ZV0BhGpTtLed5dBgippJjJrin4uQ",
    authDomain: "gb-react-c068b.firebaseapp.com",
    databaseURL: "https://gb-react-c068b-default-rtdb.firebaseio.com",
    projectId: "gb-react-c068b",
    storageBucket: "gb-react-c068b.appspot.com",
    messagingSenderId: "548907592179",
    appId: "1:548907592179:web:617b1d2485cc3397444a86",
    measurementId: "G-JCF8E4GE8W"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();