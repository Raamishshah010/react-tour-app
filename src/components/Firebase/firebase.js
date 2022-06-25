import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc7pvNqZT8GOPYDhW0z0oEIam4z2Vn0HU",
    authDomain: "gotravel-153a1.firebaseapp.com",
    projectId: "gotravel-153a1",
    storageBucket: "gotravel-153a1.appspot.com",
    messagingSenderId: "1092612783974",
    appId: "1:1092612783974:web:9df17a7d4f813282ead2a7"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();