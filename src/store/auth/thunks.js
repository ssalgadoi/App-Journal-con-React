import { checkingCredentials, logout, login } from "./";
import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());  // Cambia el estado a 'checking' en tu store

        try {
            // Ahora hacemos la validación de las credenciales
            const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password });

            if (ok) {
                dispatch(login({ uid, displayName, email, photoURL }));  // Si el login es correcto
            } else {
                dispatch(logout({ errorMessage }));  // Si el login falla
            }
        } catch (error) {
            dispatch(logout({ errorMessage: error.message }));  // Manejo de errores
        }
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

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));
    };
};

// Login con email y password
export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));
    };
};

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();

        dispatch(logout());
    }
}