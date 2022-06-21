import { db } from "../client";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

const userActivityRef = collection(db, "userActivity");

export const getUserActivity = async ({ currentUserId }) => {
  const q = query(userActivityRef, where(documentId(), "==", currentUserId));
  const data = await getDocs(q);
  const response = data.docs[0].data();
  return response;
};
