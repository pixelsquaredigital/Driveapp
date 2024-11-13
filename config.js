

// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import { initializeApp } from 'firebase/app';
// // import {getAnalytics} from 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: "AIzaSyCNkwqJekE_XDKSpjZXT_ArvKnw0L5_Akg",
//   authDomain: "driveapp-3b6bf.firebaseapp.com",
//   projectId: "driveapp-3b6bf",
//   storageBucket: "driveapp-3b6bf.firebasestorage.app",
//   messagingSenderId: "142435564484",
//   appId: "1:142435564484:web:ce17009a5aa400b4bc8291",
//   measurementId: "G-GV7KVL27F7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // if(!firebase.getApp.length
// // ){
// //   firebase.initializeApp(firebaseConfig);

// // }
// export {firebase};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNkwqJekE_XDKSpjZXT_ArvKnw0L5_Akg",
  authDomain: "driveapp-3b6bf.firebaseapp.com",
  databaseURL: "https://driveapp-3b6bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "driveapp-3b6bf",
  storageBucket: "driveapp-3b6bf.firebasestorage.app",
  messagingSenderId: "142435564484",
  appId: "1:142435564484:web:ce17009a5aa400b4bc8291",
  measurementId: "G-GV7KVL27F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getDatabase(app);