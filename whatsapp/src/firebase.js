// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCICvGHO4rPV-K3wDkgbQFvWsvF4JsiIOg",
    authDomain: "whatsapp-170c4.firebaseapp.com",
    projectId: "whatsapp-170c4",
    storageBucket: "whatsapp-170c4.appspot.com",
    messagingSenderId: "1082039334600",
    appId: "1:1082039334600:web:2b3764349986fcd064d7fd",
    measurementId: "G-9QX89B630F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;