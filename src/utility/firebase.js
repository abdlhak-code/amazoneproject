
import  firebase  from "firebase/compat/app";

// auth
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2BB_FhSsZQnEed05v0ew-AFIxiL0g-I8",
  authDomain: "clone-7f382.firebaseapp.com",
  projectId: "clone-7f382",
  storageBucket: "clone-7f382.appspot.com",
  messagingSenderId: "461305812177",
  appId: "1:461305812177:web:1b6a25db02cfb86bfde1f0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore();


