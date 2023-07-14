import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNdBMiLKcaMBHw5w2-ktsNUh_0cpklMr4",
    authDomain: "fackedeployment.firebaseapp.com",
    projectId: "fackedeployment",
    storageBucket: "fackedeployment.appspot.com",
    messagingSenderId: "210732784335",
    appId: "1:210732784335:web:284b8bd1326eb769a435ba",
    measurementId: "G-T78PNZG2W5"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  export { auth, firestore }