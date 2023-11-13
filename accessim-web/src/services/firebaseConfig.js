// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
