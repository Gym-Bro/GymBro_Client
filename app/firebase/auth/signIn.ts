import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";

const auth = getAuth(firebase_app);

export async function signIn(email:string, password:string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export  const signOut = ()=> auth.signOut() ;

export const passwordReset =async (email:string) => await sendPasswordResetEmail(auth, email);
export const confirmResetPassword = async (obbCode:string, newPassword:string) => !obbCode && !newPassword ? await confirmPasswordReset(auth, obbCode, newPassword) : null;