import { app } from "./client";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getUserActivity } from "./query/userActivityQuery";
import { getUserInformation } from "./query/userInformationQuery";
// -------PROVIDERS------------ //
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// ------AUTH OBJECT---------- //
export const auth = getAuth(app);

// -----AUTH FUNCTIONS-------- //
export const createUser = async ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithProvider = (provider) => {
  return signInWithPopup(auth, provider);
};

export const signOut = () => {
  auth.signOut();
};

const mapUserFromFirebaseAuth = (user) => {
  const { photoURL, uid, displayName } = user;
  const username = user.reloadUserInfo.screenName;
  return {
    avatar: photoURL,
    username,
    uid,
    displayName,
  };
};

export const isUserSigned = (onChange) => {
  onAuthStateChanged(auth, async (userData) => {
    if (userData) {
      const user = mapUserFromFirebaseAuth(userData);
      const userActivity = await getUserActivity({
        currentUserId: userData.uid,
      });
      const userInformation = await getUserInformation({
        userId: userData.uid,
      });
      user.userActivity = userActivity;
      user.userInformation = userInformation;
      onChange(user);
    } else onChange(null);
  });
};

export const updateUser = ({
  displayName,
  photoURL,
  username,
  description,
}) => {
  return updateProfile(auth.currentUser, {
    displayName,
    photoURL,
    username,
    description,
  });
};
