// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJYHAenGcnu-izGjO2sNfgza606x9tid8",
  authDomain: "fasttravels92.firebaseapp.com",
  projectId: "fasttravels92",
  storageBucket: "fasttravels92.appspot.com",
  messagingSenderId: "723400612127",
  appId: "1:723400612127:web:26ccde0f1fe57187e6f82a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
