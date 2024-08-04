// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
//import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLe_1zGVGNBJGpKq830KExzgXckF39tYA",
  authDomain: "inventory-management-app-ad887.firebaseapp.com",
  projectId: "inventory-management-app-ad887",
  storageBucket: "inventory-management-app-ad887.appspot.com",
  messagingSenderId: "199757747855",
  appId: "1:199757747855:web:1090600653fadb1bb6c2fa",
  measurementId: "G-FBFS1CQ6MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };