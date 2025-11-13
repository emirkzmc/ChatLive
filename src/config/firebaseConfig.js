import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAR3dol92UPZ-aAPwSdJM-1c-1JhFGpi8c",
  authDomain: "chatlive-da748.firebaseapp.com",
  databaseURL: "https://chatlive-da748-default-rtdb.firebaseio.com",
  projectId: "chatlive-da748",
  storageBucket: "chatlive-da748.firebasestorage.app",
  messagingSenderId: "877335316413",
  appId: "1:877335316413:web:a2372a2d002b904a1ff4d4",
  measurementId: "G-QFDSDRTZ47"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);