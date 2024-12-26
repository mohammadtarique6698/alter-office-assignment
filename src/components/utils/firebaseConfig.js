/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDukGNoN0ntYdaWoOJNZyD-IjkZTHGiK_I",
  authDomain: "social-media-feed-da995.firebaseapp.com",
  projectId: "social-media-feed-da995",
  storageBucket: "social-media-feed-da995.firebasestorage.app",
  messagingSenderId: "21003287248",
  appId: "1:21003287248:web:341ba279c2e741ece0bcd5",
  measurementId: "G-8W9S23T89R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
