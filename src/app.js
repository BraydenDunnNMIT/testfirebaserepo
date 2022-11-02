

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAhovH6agktsOQ6_s5tpv1QGpn5jsZBUh4",
  authDomain: "dummyproject-dce69.firebaseapp.com",
  projectId: "dummyproject-dce69",
  storageBucket: "dummyproject-dce69.appspot.com",
  messagingSenderId: "722242166232",
  appId: "1:722242166232:web:9963492a83c4cb2226a6ad",
  measurementId: "G-HYX7K74T42"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




import (collection, doc); from: 'firebase/firestore'
 const staffcollectionreference = collection(db, 'users')

 const staffcol = collection(db, 'users')

 const userdoc = doc(db, 'users/');

 