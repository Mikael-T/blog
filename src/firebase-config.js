// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZUuzvAP6sYzrdoXjCiQuVIT9DVjVUn5I",
    authDomain: "blogproject-1fbdf.firebaseapp.com",
    projectId: "blogproject-1fbdf",
    storageBucket: "blogproject-1fbdf.appspot.com",
    messagingSenderId: "85359887568",
    appId: "1:85359887568:web:0feacbe0e3bc77885d0ad5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
