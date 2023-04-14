import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Firebase configuration for emulator
const firebaseConfig = {
  apiKey: "AIzaSyC2PlruFjSk9EZllJC9jvAQBz7oFj5O1-I",
  authDomain: "gymbro-27bb2.firebaseapp.com",
  databaseURL: "localhost",
  projectId: "gymbro-27bb2",
  storageBucket: "gymbro-27bb2.appspot.com",
  messagingSenderId: "838322836847",
  appId: "1:838322836847:web:a0f0e90e202d2f2300c49a",
  measurementId: "G-JLBDNKZ03P",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase services with emulator settings
const auth = getAuth(app);
const db = getFirestore(app);

// Set Firebase emulator URL for auth and firestore
// auth.useEmulator("http://localhost:9099");
// db.useEmulator("localhost", 8080);

connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, "http://localhost:8080");

export { auth, db, app };
