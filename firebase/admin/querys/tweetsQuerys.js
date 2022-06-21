import { app, firestore } from "../admin";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { addUserActivity } from "../userActivity";

export const tweetsRef = firestore.collection("tweets");
export const comentRef = firestore.collection("coments");
export const userInformationRef = firestore.collection("userInformation");
const parseDate = (data) => {
  const { createdAt } = data;
  return createdAt.toMillis();
};
export const shareTweet = async ({ tweetId, currentUserId }) => {
  // obtener el tweet original
  const originalTweet = await tweetsRef.doc(tweetId).get();
  // veirificar que exista el tweet
  if (originalTweet.exists) {
    // creamos el nuevo tweet a con referencia al original
    const data = {
      userId: currentUserId,
      originalTweetId: tweetId,
      type: "shared",
      createdAt: Timestamp.now(),
    };
    await tweetsRef.add(data);
  }
};
export const unShareTweet = async ({ tweetId, currentUserId }) => {
  const doc = await tweetsRef.doc(tweetId).get();
  const sharedTweet = doc.data();

  console.log("sharedTweet!", sharedTweet.userId);
  console.log("currentUserId", currentUserId);
  if (sharedTweet.userId === currentUserId) {
    return await tweetsRef.doc(tweetId).delete();
  }
};
export const getTweetsByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    tweetsRef
      .where("userId", "==", userId)
      .where("type", "!=", "coment")
      .get()
      .then((data) => {
        Promise.all(
          data.docs.map(async (doc) => {
            const data = doc.data();
            // tweets que el usuario compartió
            if (data.type === "shared") {
              const doc = await tweetsRef.doc(data.originalTweetId).get();
              const originalTweet = doc.data();
              if (originalTweet) {
                const { createdAt } = originalTweet;
                originalTweet.createdAt = createdAt.toMillis();
                const id = doc.id;
                return {
                  ...originalTweet,
                  id,
                  type: "shared",
                };
              } else {
                return {
                  error: "tweet no disponible",
                  type: "shared",
                };
              }
            } else {
              const { createdAt } = data;
              data.createdAt = createdAt.toMillis();
              const id = doc.id;
              return {
                ...data,
                id,
              };
            }
          })
        ).then((response) => resolve(response));
      });
  });
};
export const getAllTweets = async () => {
  return new Promise((resolve, reject) => {
    tweetsRef
      .where("type", "==", "principal")
      .get()
      .then((data) => {
        const response = data.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          data.createdAt = parseDate(data);
          // data.user = await getUserById(data.userId);
          return data;
        });
        resolve(response);
      });
  });
};

export const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    getAuth(app)
      .getUser(userId)
      .then(async (userRecord) => {
        const data = userRecord.toJSON();
        const doc = await userInformationRef.doc(userId).get();
        const userInfo = doc.data();
        const { uid, displayName, photoURL } = data;
        resolve({
          id: uid,
          displayName,
          avatar: photoURL,
          ...userInfo,
        });
      });
  });
};

export const addComent = async ({
  rootId,
  userId,
  coment,
  likeCounts = 0,
  shareCounts = 0,
  comentCounts = 0,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newTweet = await tweetsRef.add({
        userId,
        content: coment,
        createdAt: Timestamp.now(),
        comentCounts,
        likeCounts,
        shareCounts,
        coments: [],
        type: "coment",
        belongToTweet: rootId,
      });
      const tweetRoot = await tweetsRef.doc(rootId).get();
      if (tweetRoot.data().coments.length === 0) {
        await tweetsRef.doc(rootId).update({
          coments: [newTweet.id],
          comentCounts: FieldValue.increment(1),
        });
      } else {
        await tweetsRef.doc(rootId).update({
          coments: FieldValue.arrayUnion(newTweet.id),
          comentCounts: FieldValue.increment(1),
        });
      }
      const targetUserId = tweetRoot.data().userId;
      addUserActivity({
        tweetId: rootId,
        currentUserId: userId,
        targetUserId,
        typeActivity: "coment",
      });
      resolve();
    } catch (error) {
      console.log("error es:", error);
      reject(error);
    }
  });
};

export const getTweetsById = async (tweetId) => {
  const data = await tweetsRef.doc(tweetId).get();
  const tweet = data.data();
  tweet.id = data.id;
  tweet.createdAt = parseDate(tweet);
  return tweet;
};

export const deleteTweet = async ({ tweetId, userId }) => {
  return new Promise((resolve, reject) => {
    tweetsRef
      .doc(tweetId)
      .get()
      .then(async (doc) => {
        try {
          const tweet = doc.data();
          if (tweet.userId === userId) {
            if (tweet.type === "coment") {
              const rootTweetId = tweet.belongToTweet;
              await tweetsRef.doc(rootTweetId).update({
                coments: FieldValue.arrayRemove(tweetId),
                comentCounts: FieldValue.increment(-1),
              });
              tweetsRef
                .doc(rootTweetId)
                .get()
                .then((doc) => {
                  const RootTweet = doc.data();
                  // si el usuario ya no tiene ningun comentario en el tweet, se actualiza el userActivity
                  if (RootTweet.comentCounts === 0) {
                    addUserActivity({
                      tweetId: rootTweetId,
                      currentUserId: userId,
                      targetUserId: RootTweet.userId,
                      typeActivity: "delete-coment",
                    });
                  }
                });
            }
            const deleted = await tweetsRef.doc(tweetId).delete();
            resolve(deleted);
          } else {
            reject(new Error("incorrect userId"));
          }
        } catch (error) {
          reject(error);
        }
      })
      .catch((error) => reject(error));
  });
};

export const createTweet = async ({ content, userId, downloadImageURL }) => {
  return await tweetsRef.add({
    userId,
    content,
    createdAt: Timestamp.now(),
    likeCounts: 0,
    shareCounts: 0,
    comentCounts: 0,
    downloadImageURL,
    coments: [],
    type: "principal",
  });
};
