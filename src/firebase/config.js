import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyBStFPySPrpmqx2Kr2nrUWKr04oGzi9CM8",
        authDomain: "fir-688c2.firebaseapp.com",
        projectId: "fir-688c2",
        storageBucket: "fir-688c2.appspot.com",
        messagingSenderId: "509281749149",
        appId: "1:509281749149:web:6d65fa7b82455b9d7cec74",
        measurementId: "G-20FW1VBCMP"
      };

export const Firebase = firebase.initializeApp(firebaseConfig);