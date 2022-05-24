import { app } from "./client";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// -------PROVIDERS------------ //
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// ------AUTH OBJECT---------- //
const auth = getAuth(app);

// -----AUTH FUNCTIONS-------- //
export const createUser = async ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithProvider = async (provider) => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {}
};

export const signOut = () => {
  auth.signOut();
};
