import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKn-Jy1aT6_BogXC6visewlVWntZmzObo",
  authDomain: "notluyorum-76d68.firebaseapp.com",
  projectId: "notluyorum-76d68",
  storageBucket: "notluyorum-76d68.appspot.com",
  messagingSenderId: "643717030849",
  appId: "1:643717030849:web:973498216bb2ec2abec540",
  measurementId: "G-4JBRXM24VT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
