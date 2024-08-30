// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore"
import {connectAuthEmulator, getAuth} from "firebase/auth"
import { connectFunctionsEmulator, getFunctions } from "firebase/functions"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);
export const fbFunctions = getFunctions(app);
export default app;

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}