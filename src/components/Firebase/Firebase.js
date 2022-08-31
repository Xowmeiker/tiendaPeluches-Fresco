import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCofEeMkfWyGFySKk9VGXMAQGlRDN0-_NU",
    authDomain: "stuffed-01.firebaseapp.com",
    projectId: "stuffed-01",
    storageBucket: "stuffed-01.appspot.com",
    messagingSenderId: "672021841020",
    appId: "1:672021841020:web:722117fd01121cfaf335f9",
    measurementId: "G-J1D3H917RX",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export default db
