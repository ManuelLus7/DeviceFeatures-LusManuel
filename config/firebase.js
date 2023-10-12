import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCKSbFT__lnAenwiNIw9EZW9aIdlT-KB_s",
  authDomain: "wotton-69aa3.firebaseapp.com",
  databaseURL: "https://wotton-69aa3-default-rtdb.firebaseio.com",
  projectId: "wotton-69aa3",
  storageBucket: "wotton-69aa3.appspot.com",
  messagingSenderId: "993698469211",
  appId: "1:993698469211:web:f53dc544be8ceebc37b67e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);