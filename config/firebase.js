// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKSbFT__lnAenwiNIw9EZW9aIdlT-KB_s",
  authDomain: "wotton-69aa3.firebaseapp.com",
  databaseURL: "https://wotton-69aa3-default-rtdb.firebaseio.com",
  projectId: "wotton-69aa3",
  storageBucket: "wotton-69aa3.appspot.com",
  messagingSenderId: "993698469211",
  appId: "1:993698469211:web:f53dc544be8ceebc37b67e"
};
// these keys won't work because i've removed the app from firebase
// add your app on firebase, copy firebaseConfig here, enable email/password auth
// and test the app ;)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);