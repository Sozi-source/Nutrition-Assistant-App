// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP2WwRj2cGxAnqPTmvjlzUJFdDD8ehs5w",
  authDomain: "nutrition-assistant-app.firebaseapp.com",
  projectId: "nutrition-assistant-app",
  storageBucket: "nutrition-assistant-app.firebasestorage.app",
  messagingSenderId: "847343413494",
  appId: "1:847343413494:web:4f100a3af5f31f384ce4d7",
  measurementId: "G-9GZ4VQFQT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export{app, auth};