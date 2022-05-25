import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnRwu3rmO1r_2KIiYnoYGAKJWWnalIasY",
  authDomain: "blog-app-16d25.firebaseapp.com",
  databaseURL: "https://blog-app-16d25-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-16d25",
  storageBucket: "blog-app-16d25.appspot.com",
  messagingSenderId: "548977964749",
  appId: "1:548977964749:web:8ea8c9c7302860cfff1b84"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { email: email });  
    navigate("/Fireblog-App/");
  } catch (err) {
    alert(err.message);
  }
};

export const signInUser = async (email, password, navigate) => {
  try {
    const signIn = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(signIn);
    navigate("/Fireblog-App/");
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/Fireblog-App/");
    })
    .catch((error) => {
      alert(error.message);
    });
};
