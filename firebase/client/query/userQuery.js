import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../client";

const userInfoRef = collection(db, "userInformation");

export const getUserByName = async ({ name }) => {
  const results = [];
  const q1 = query(userInfoRef, where("displayName", "==", name));
  const q2 = query(userInfoRef, where("userName", "==", name));
  const data1 = await getDocs(q1);
  const data2 = await getDocs(q2);
  data1.docs.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    results.push(data);
  });
  data2.docs.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    results.push(data);
  });
  return results;
};
