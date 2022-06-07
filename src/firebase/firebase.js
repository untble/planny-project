import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPPsJYBE1epiFXnTi9xDJcLEUYO0ihW4s",
    authDomain: "planny-b97b9.firebaseapp.com",
    projectId: "planny-b97b9",
    storageBucket: "planny-b97b9.appspot.com",
    messagingSenderId: "360169216375",
    appId: "1:360169216375:web:921e385c5201020efca972",
    measurementId: "G-GZDD20WKB0"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
export const auth = getAuth();


export default db;
