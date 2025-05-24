// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import required Firebase functions

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAlDl512Hsf8C9MT2q-iYwiUNobNlCkg0M",
    authDomain: "doc4u-91105.firebaseapp.com",
    projectId: "doc4u-91105",
    storageBucket: "doc4u-91105.firebasestorage.app",
    messagingSenderId: "170364032061",
    appId: "1:170364032061:web:6ce126783c56948d2d8654",
    measurementId: "G-C34V35D231"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);
export { auth, GoogleAuthProvider, signInWithPopup };
