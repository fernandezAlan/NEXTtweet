import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  getDocs,
  // orderBy,
  // onSnapshot
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
// import { storage }¿ from "firebase/storage";
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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

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
  const auth = getAuth(app);
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

export const addTweet = ({
  avatar,
  content,
  userId,
  userName,
  displayName,
  downloadImageURL,
}) => {
  return addDoc(collection(db, "tweets"), {
    avatar,
    content,
    userId,
    userName,
    createdAt: Timestamp.now(),
    likeCounts: 0,
    shareCounts: 0,
    displayName,
    downloadImageURL,
  });
};

export const getTweet = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "tweets"))
      .then((snapshot) => {
        const results = snapshot.docs.map((doc) => {
          const data = doc.data();
          const { createdAt } = data;
          data.createdAt = createdAt.toMillis();
          const id = doc.id;
          return {
            ...data,
            id,
          };
        });
        resolve(results);
      })
      .catch((error) => reject(error));
  });
};
const imageOnload = (snapshot) => {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log("Upload is " + progress + "% done");
};
const imageOnError = (error) => {
  console.log("error at upload image:", error);
};

export const uploadImage = ({ file, folder }) => {
  return new Promise((resolve, reject) => {
    try {
      const imagesRef = ref(storage, `${folder}/${file.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, file);
      uploadTask.on("state_changed", imageOnload, imageOnError, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadImageURL) => {
          resolve(downloadImageURL);
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};
