// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAroNyXiITT91Cd6rFJXf7LOcuO5mp3D2k",
    authDomain: "react-960f9.firebaseapp.com",
    projectId: "react-960f9",
    storageBucket: "react-960f9.firebasestorage.app",
    messagingSenderId: "454833558219",
    appId: "1:454833558219:web:98c74b51fc3bcf81cd814e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
