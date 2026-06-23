import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp46ArWIBZL-1ihzZZS8LmNvKI8hS5OVQ",
  authDomain: "sri-elite-cake-house.firebaseapp.com",
  projectId: "sri-elite-cake-house",
  storageBucket: "sri-elite-cake-house.firebasestorage.app",
  messagingSenderId: "313707764785",
  appId: "1:313707764785:web:0cbf900f7af944f503c910",
  measurementId: "G-JW6FSEBEGH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;