import { getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";
const firebaseAdminConfig = {
  type: process.env.FIREBASE_ADMIN_TYPE,
  project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
  private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
  auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
  token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_PROVIDER,
  client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_URL,
};

const serviceAccount = require("../firebase-keys-dev.json");
export let app = getApps()[0];
if (!app) {
  app = admin.initializeApp(
    {
      credential:
        process.env.NODE_ENV === "production"
          ? firebaseAdminConfig
          : admin.credential.cert(serviceAccount),
      databaseURL: "https://dev-tw-3997d-default-rtdb.firebaseio.com",
    },
    "admin_app"
  );
}

export const firestore = getFirestore(app);
