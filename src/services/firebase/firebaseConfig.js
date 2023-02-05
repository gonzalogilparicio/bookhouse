import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtlZx_eYQLCjmA2R61A3EP-m2ypNqgfuE",
  authDomain: "backendbookhouse.firebaseapp.com",
  projectId: "backendbookhouse",
  storageBucket: "backendbookhouse.appspot.com",
  messagingSenderId: "149316840573",
  appId: "1:149316840573:web:86db9139228a9f46779514"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);