import { getAuth } from "firebase-admin/auth";
import { firestore, app } from "../admin";

const userActRef = firestore.collection("userActivity");
const userInfoRef = firestore.collection("userInformation");

// verificamos el token de sesión para encontrar al usuario que realiza la petición
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
export const deleteUserAccount = async ({ currentUserId }) => {
  await getAuth(app).deleteUser(currentUserId);
  await userActRef.doc(currentUserId).delete();
  await userInfoRef.doc(currentUserId).delete();
};
