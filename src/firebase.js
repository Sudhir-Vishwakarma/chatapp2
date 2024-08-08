import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdF6s1qA26GXu_CMjKwJU1B6PaqqspdVU",
    authDomain: "chatapp2-87658.firebaseapp.com",
    projectId: "chatapp2-87658",
    storageBucket: "chatapp2-87658.appspot.com",
    messagingSenderId: "419878401930",
    appId: "1:419878401930:web:607f35d638874e4c317a73"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();