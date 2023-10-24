// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-YfDpm82B0KskzwZfg5winD5lzWLi628",
  authDomain: "accessim-2ae77.firebaseapp.com",
  databaseURL: "https://accessim-2ae77-default-rtdb.firebaseio.com",
  projectId: "accessim-2ae77",
  storageBucket: "accessim-2ae77.appspot.com",
  messagingSenderId: "449927592576",
  appId: "1:449927592576:web:c1cbbdde66aa266c350465",
  measurementId: "G-MGW98NRRKE",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
