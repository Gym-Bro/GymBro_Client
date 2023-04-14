import { app, auth, db } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function signIn(email, password) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export function signOut() {
  auth.signOut();
}
