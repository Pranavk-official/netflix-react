import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP8U0fosfXVMeVoPT3kpKHW_3MbKgYAew",
  authDomain: "netflix-react-ec88a.firebaseapp.com",
  projectId: "netflix-react-ec88a",
  storageBucket: "netflix-react-ec88a.appspot.com",
  messagingSenderId: "500554006321",
  appId: "1:500554006321:web:81b58e1507cb3275003a10",
  measurementId: "G-6PVGRVRWNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = response.user;
    await addDoc(
      collection(db, "user", {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    );
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

const logOut = async () => {
  signOut(auth);
};

export { auth, db, signIn, signUp, logOut };
