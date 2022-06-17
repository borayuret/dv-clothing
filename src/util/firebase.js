
import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAJPiNk0cOdR4fcpevqO-F3s9UygqEKBNM",
  authDomain: "dv-clothing-db-ac43c.firebaseapp.com",
  projectId: "dv-clothing-db-ac43c",
  storageBucket: "dv-clothing-db-ac43c.appspot.com",
  messagingSenderId: "212779236500",
  appId: "1:212779236500:web:05d84083a8d35276a00881"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

