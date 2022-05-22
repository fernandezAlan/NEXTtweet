import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../client";

const TweetsRefs = collection(db, "tweets");

export const getOwnTweets = async (userId) => {
  const q = query(TweetsRefs, where("userId", "==", userId));
  const data = await getDocs(q);
  return data.docs.map((doc) => {
    const data = doc.data();
    const { createdAt } = data;
    data.createdAt = createdAt.toMillis();
    const id = doc.id;
    return {
      ...data,
      id,
    };
  });
};
