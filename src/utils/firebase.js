// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB58a8tO52-5rS8rg0rYVznQb-Jau92kkI",
  authDomain: "netflix-gpt-c38f9.firebaseapp.com",
  projectId: "netflix-gpt-c38f9",
  storageBucket: "netflix-gpt-c38f9.firebasestorage.app",
  messagingSenderId: "176162566551",
  appId: "1:176162566551:web:98725eaf744433b8e5d4d2",
  measurementId: "G-01Z1FH4TD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();