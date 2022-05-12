import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvfDk7XBYp6Kgn662U9-qrEzWhBMmFOEY",
  authDomain: "dev-tw-3997d.firebaseapp.com",
  projectId: "dev-tw-3997d",
  storageBucket: "dev-tw-3997d.appspot.com",
  messagingSenderId: "95783529278",
  appId: "1:95783529278:web:763c2c2a61292e557eda6f",
  measurementId: "G-QP5JQJYX0Y",
};
const mapUserFromFirebaseAuth = (user) => {
  const { photoURL } = user;
  const username = user.reloadUserInfo.screenName;
  return {
    avatar: photoURL,
    username,
  };
};
initializeApp(firebaseConfig);
export const isUserSigned = (onChange) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      const user = mapUserFromFirebaseAuth(userData);
      onChange(user);
    } else onChange(null);
  });
};
export const loginWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    return mapUserFromFirebaseAuth(result.user);
  } catch (error) {
    console.error("error at loginWithGithub:", error);
  }
};
