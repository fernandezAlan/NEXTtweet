import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../client";

const userInfoRef = collection(db, "userInformation");

export const getUserInformation = async ({ userId }) => {
  const q = query(userInfoRef, where(documentId(), "==", userId));
  const document = await getDocs(q);
  const userInformation = document.docs[0].data();
  userInformation.id = userId;
  return userInformation;
};
