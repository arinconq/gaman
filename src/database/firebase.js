import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBU01oj6B5Po9A8j-YedMDc_ikY68zclK8",
    authDomain: "gamanapp-54092.firebaseapp.com",
    projectId: "gamanapp-54092",
    storageBucket: "gamanapp-54092.appspot.com",
    messagingSenderId: "783897737617",
    appId: "1:783897737617:web:42ed3d13291a3f8c590230",
    measurementId: "G-X2QYSXNJSV"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const storage = firebase.storage();
  export const db = fb.firestore();
 
  firebase.analytics();

