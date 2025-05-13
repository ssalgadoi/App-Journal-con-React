
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
       

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // datos del usuario
            displayName,
            email,
            photoURL,
            uid,
        };

    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        };
    }
};
