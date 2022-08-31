import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const {Product} = useContext(context);


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const database = getDatabase(app);

function useFirebase() {
    const context = React.useContext(FirebaseAuthContext);
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      );
    }
    return context.user;
  }
  
  export { useFirebase };