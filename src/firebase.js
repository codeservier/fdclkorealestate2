// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSKa9BZtSTHk_tnaUIcsbeMGeYcruw8Hc",
  authDomain: "fdclko-c0f76.firebaseapp.com",
  projectId: "fdclko-c0f76",
  storageBucket: "fdclko-c0f76.appspot.com",
  messagingSenderId: "902203237733",
  appId: "1:902203237733:web:ca043ddb7030170fac6d8c",
  measurementId: "G-WPY0FYY5X0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
