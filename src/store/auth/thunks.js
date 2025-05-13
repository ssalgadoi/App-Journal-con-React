import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";

import { checkingCredentials, logout, login } from "./";

// Comprobación de credenciales mientras se autentica
export const checkingAuthentication = (email, password) => {
    return async (dispatch) => { 
        dispatch(checkingCredentials());
    };
};

// Inicio de sesión con Google
export const startGoogleSignIn = () => {
    return async (dispatch) => { 
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};

// Registro de nuevo usuario con email y contraseña
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch(logout({errorMessage}))
        
        dispatch(login({uid, displayName, email, photoURL}));
      
    };
};
