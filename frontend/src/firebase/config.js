import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6GJHrKSsd17dTWKrKcQ9txVgM6QHza6k",
  authDomain: "online-medical-store-49c9b.firebaseapp.com",
  projectId: "online-medical-store-49c9b",
  storageBucket: "online-medical-store-49c9b.firebasestorage.app",
  messagingSenderId: "911444654729",
  appId: "1:911444654729:web:76400dab16b5a1e8996458",
  measurementId: "G-616F5VCCC3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
