import firebase from "firebase/app";
import "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBz8gQhEBGaYzWpMDjAqq0vTA3J5ArCnXc",
  authDomain: "ecomerce-javi.firebaseapp.com",
  projectId: "ecomerce-javi",
  storageBucket: "ecomerce-javi.appspot.com",
  messagingSenderId: "403448336238",
  appId: "1:403448336238:web:7e400d051a466ad8e4bb7f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export function getFirestore() {
    return firebase.firestore(app)
    
}
