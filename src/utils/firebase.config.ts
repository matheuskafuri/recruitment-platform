import { getAnalytics } from "firebase/analytics";
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4zSy7n1Pv1SL1_KxbEXJHO5raCMKjwLI",
  authDomain: "g4-recruitment-platform.firebaseapp.com",
  projectId: "g4-recruitment-platform",
  storageBucket: "g4-recruitment-platform.appspot.com",
  messagingSenderId: "414147977979",
  appId: "1:414147977979:web:47ca4609b7a2ce6006465e"
};

if (!getApps.length) {
  initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    if ("measurementId" in firebaseConfig) {
      getAnalytics();
    }
  }
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
