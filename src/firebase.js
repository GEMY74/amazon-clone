import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvDhoDzG6o0J_ClKgLnJlIJQ9H0Qu7c9U",
  authDomain: "clone-98437.firebaseapp.com",
  projectId: "clone-98437",
  storageBucket: "clone-98437.appspot.com",
  messagingSenderId: "12864608485",
  appId: "1:12864608485:web:44d65bb378bbdcbcc41c0c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
