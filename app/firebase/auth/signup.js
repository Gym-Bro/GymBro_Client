import { auth } from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";

export default async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
