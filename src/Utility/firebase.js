import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6g-HZJihJ2IR3RsIKotwd3Ptb3fy6ZLI",
    authDomain: "clone-725bb.firebaseapp.com",
    projectId: "clone-725bb",
    storageBucket: "clone-725bb.appspot.com",
    messagingSenderId: "899657064322",
    appId: "1:899657064322:web:af8e4b08b51c89f822399b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();