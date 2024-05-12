// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e0946.firebaseapp.com",
  projectId: "mern-estate-e0946",
  storageBucket: "mern-estate-e0946.appspot.com",
  messagingSenderId: "555755265457",
  appId: "1:555755265457:web:0c9f477175c3c332efb190"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);