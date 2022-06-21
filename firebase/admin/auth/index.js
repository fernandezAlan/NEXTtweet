import { getAuth } from "firebase-admin/auth";
import { app } from "../admin";
export const verifyIdToken = (idToken) => {
  return new Promise((resolve, reject) => {
    getAuth(app)
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        resolve(uid);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
