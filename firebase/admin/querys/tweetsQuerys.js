import { tweetsRef, app } from "../admin";
import { getAuth } from "firebase-admin/auth";

export const getTweetsByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    try {
      tweetsRef
        .where("userId", "==", userId)
        .get()
        .then((data) => {
          const response = data.docs.map((doc) => {
            const data = doc.data();
            const { createdAt } = data;
            data.createdAt = createdAt.toMillis();
            const id = doc.id;
            return {
              ...data,
              id,
            };
          });
          resolve(response);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const getUserById = (userId) => {
  return getAuth(app)
    .getUser(userId)
    .then((userRecord) => {
      const data = userRecord.toJSON();
      const { uid, displayName, photoURL } = data;
      return {
        id: uid,
        displayName,
        avatar: photoURL,
      };
    });
};
