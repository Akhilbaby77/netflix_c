// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB9eZx7P2u8xp7Quo1TMI65fuucuTF5_Dk",
//   authDomain: "netflix-email-authentication.firebaseapp.com",
//   projectId: "netflix-email-authentication",
//   storageBucket: "netflix-email-authentication.appspot.com",
//   messagingSenderId: "961885446535",
//   appId: "1:961885446535:web:50032e77ea4cce3036f322"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA-f5NsCAD_85ZzOvJHcmKYwVN5HVl2vbQ",
  authDomain: "netflixclone-5c756.firebaseapp.com",
  projectId: "netflixclone-5c756",
  storageBucket: "netflixclone-5c756.appspot.com",
  messagingSenderId: "385742952252",
  appId: "1:385742952252:web:cddbad6ce2f3bdad0ab039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const database = getAuth(app)