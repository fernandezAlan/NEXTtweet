import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../client";

const userInfoRef = collection(db, "userInformation");

export const getUserByName = async ({ name }) => {
  const q = query(
    userInfoRef,
    where("names", "array-contains", name.toUpperCase())
  );
  const data = await getDocs(q);

  const results = data.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });
  return results;
};


