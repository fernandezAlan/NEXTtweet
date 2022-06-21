import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../client";

const TweetsRefs = collection(db, "tweets");
// const ComentsRef = collection(db, "coments");
export const getFollowedUsersTweets = async ({
  followedUsersId,
  currentUserId,
}) => {
  const copy = followedUsersId.slice();
  copy.push(currentUserId);
  const results = [];
  for (let i = 0; copy.length; i++) {
    const tenUsersId = copy.splice(0, 10);
    const q = query(TweetsRefs, where("userId", "in", tenUsersId));
    const data = await getDocs(q);
    data.docs.forEach(async (doc) => {
      const data = doc.data();

      // si es el usuario compartió un tweet
      if (data.type === "shared") {
        // buscamos el tweet original
        const originalTweetId = data.originalTweetId;
        const q = query(TweetsRefs, where(documentId(), "==", originalTweetId));

        // obtenemos los datos del tweet a partir del documento
        const document = await getDocs(q);
        if (document.docs[0]) {
          const originalTweet = document.docs[0].data();
          const { createdAt } = originalTweet;
          originalTweet.createdAt = createdAt.toMillis();
          const id = document.docs[0].id;
          originalTweet.id = id;
          originalTweet.type = "shared";
          // si el tweet original existe lo devolvemos con el type a "shared"
          if (originalTweet) {
            results.push(originalTweet);
          }
        }
      }
      // solo filtramos los tweets principales
      else if (data.type === "principal") {
        const { createdAt } = data;
        data.createdAt = createdAt.toMillis();
        const id = doc.id;
        results.push({
          ...data,
          id,
        });
      }
    });
  }
  results.sort((a, b) => a.createdAt - b.createdAt);
  return results;
};
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

export const getTweetById = async ({ tweetId }) => {
  const q = query(TweetsRefs, where(documentId(), "==", tweetId));
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

export const getSharedTweetId = async ({ originalTweetId }) => {
  const q = query(TweetsRefs, where("originalTweetId", "==", originalTweetId));
  const data = await getDocs(q);
  return data.docs[0].id;
};
