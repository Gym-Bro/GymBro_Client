import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Firebase configuration for emulator
const firebaseConfig = {
  // config keys here
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
