// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0Kvl7J-Ub15lln5CVzEDgseARmNZFvUs",
  authDomain: "linkedin-clone-fd100.firebaseapp.com",
  projectId: "linkedin-clone-fd100",
  storageBucket: "linkedin-clone-fd100.appspot.com",
  messagingSenderId: "622956305809",
  appId: "1:622956305809:web:b313694d91ed13e5b24e30",
  measurementId: "G-G6XYYXQK77",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
