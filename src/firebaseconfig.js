import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "zeromargin-7c436.firebaseapp.com",
    projectId: "zeromargin-7c436",
    storageBucket: "zeromargin-7c436.appspot.com", // Corrected
    messagingSenderId: "902728661219",
    appId: "1:902728661219:web:b992730512e1a7daff6dd6",
    measurementId: "G-DEDSX1E02B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
