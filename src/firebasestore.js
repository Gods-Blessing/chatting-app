// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIhjB5RZcZupMrf1ouIFRkdrMLT-_g_x0",
  authDomain: "chattt-81774.firebaseapp.com",
  projectId: "chattt-81774",
  storageBucket: "chattt-81774.appspot.com",
  messagingSenderId: "239202211183",
  appId: "1:239202211183:web:e61653973ce9040235049a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);