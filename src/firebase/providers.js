import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";






const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        // Actualizamos el displayName en el perfil de Firebase
        await updateProfile(resp.user, { displayName });

        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, {
            displayName
        } );

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };
        
    } catch (error) {
        // console.log(error);
        return {
            ok: false,
            errorMessage: error.message
        };
    }
};


export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            displayName,
            email,
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}