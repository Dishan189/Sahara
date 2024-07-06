// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo44UXGsfWH2YMaOKcn5ohCoBm5qlRiio",
  authDomain: "sahara-app-5365c.firebaseapp.com",
  projectId: "sahara-app-5365c",
  storageBucket: "sahara-app-5365c.appspot.com",
  messagingSenderId: "698158116064",
  appId: "1:698158116064:web:109234705d8e33f1c1f485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}