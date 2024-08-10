// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmF-S4RaeGCWL1co6uXgIBLYnI4vvMJFg",
  authDomain: "bk-react-0219.firebaseapp.com",
  projectId: "bk-react-0219",
  storageBucket: "bk-react-0219.appspot.com",
  messagingSenderId: "328954758771",
  appId: "1:328954758771:web:eeb55f22e2acaa2a2ccc06",
  measurementId: "G-0QVTVJNJPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();