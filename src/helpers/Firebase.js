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
  apiKey: "AIzaSyAFcRgwJEl7KFTEnqr67sT5lgcgzclmmCk",
  authDomain: "fireblog-app-1e2bb.firebaseapp.com",
  databaseURL: "https://fireblog-app-1e2bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fireblog-app-1e2bb",
  storageBucket: "fireblog-app-1e2bb.appspot.com",
  messagingSenderId: "212825336356",
  appId: "1:212825336356:web:2b5f61108f72bcf78986b1"
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
