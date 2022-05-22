import { getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";

const serviceAccount = require("../firebase-keys.json");
export let app = getApps()[0];
if (!app) {
  app = admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://dev-tw-3997d-default-rtdb.firebaseio.com",
    },
    "admin_app"
  );
}

export const firestore = getFirestore(app);
export const tweetsRef = firestore.collection("tweets");
// export const db = admin.getDatabase();
