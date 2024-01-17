// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPopqTKDUhhU3zVMzGwwzHvkeVfd3yPDs",
  authDomain: "goaltendersss.firebaseapp.com",
  projectId: "goaltendersss",
  storageBucket: "goaltendersss.appspot.com",
  messagingSenderId: "695268868892",
  appId: "1:695268868892:web:4544c0e4f353f99795f0d9",
  measurementId: "G-T9Z62FSTS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);