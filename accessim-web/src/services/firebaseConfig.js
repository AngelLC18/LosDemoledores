import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
