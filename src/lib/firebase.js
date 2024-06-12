import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "upsense-chat-app.firebaseapp.com",
    projectId: "upsense-chat-app",
    storageBucket: "upsense-chat-app.appspot.com",
    messagingSenderId: "64171705413",
    appId: "1:64171705413:web:d87ca27be1af92b9604f2c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()