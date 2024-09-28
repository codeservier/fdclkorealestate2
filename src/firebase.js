// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

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
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
