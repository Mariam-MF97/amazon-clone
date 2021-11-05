//import firebase from "firebase";
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPUlrHM2C5pDbJQFuVodvuZxdHZUhdu00",
  authDomain: "amazclone2021.firebaseapp.com",
  projectId: "amazclone2021",
  storageBucket: "amazclone2021.appspot.com",
  messagingSenderId: "998216152667",
  appId: "1:998216152667:web:b5d6b7defbe8fc32eaf17e",
  measurementId: "G-WPM8M4N9GG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export default { db };
