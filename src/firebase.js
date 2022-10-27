// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaYR4AAqNpU5FaNIF1B4WVCxXRe2KcOYo",
  authDomain: "realtor-clone-react-95627.firebaseapp.com",
  projectId: "realtor-clone-react-95627",
  storageBucket: "realtor-clone-react-95627.appspot.com",
  messagingSenderId: "322257776886",
  appId: "1:322257776886:web:6b18e760e18d71da5cbcd7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();