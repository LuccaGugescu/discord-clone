// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7pHJgepKSNF8adHBiYzykb8uTH9OaSUo",
    authDomain: "discord-clone-f106e.firebaseapp.com",
    projectId: "discord-clone-f106e",
    storageBucket: "discord-clone-f106e.appspot.com",
    messagingSenderId: "311576454667",
    appId: "1:311576454667:web:89e56647364663ed10490e",
    measurementId: "G-0KMW5ZJLHQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
