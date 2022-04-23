import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_UWGOIifhN-Uen4fMbsr4vn65I_ARmuU",
  authDomain: "reactfirebase-9ec11.firebaseapp.com",
  projectId: "reactfirebase-9ec11",
  storageBucket: "reactfirebase-9ec11.appspot.com",
  messagingSenderId: "207701406792",
  appId: "1:207701406792:web:edd57febe1045b7585147d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)