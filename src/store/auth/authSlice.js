// Importa la función createSlice desde Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Crea y exporta una "slice" (rebanada) de estado para manejar la autenticación
export const authSlice = createSlice({
    
    // Nombre de la slice; se usará como prefijo en las acciones generadas
    name: "auth",

    // Estado inicial de la autenticación
    initialState: {
        status: "checking",      // Estado de autenticación: puede ser 'checking', 'authenticated', 'not-authenticated'
        uid: null,               // ID único del usuario (null por defecto)
        email: null,             // Email del usuario
        displayName: null,       // Nombre visible del usuario
        photoURL: null,          // URL de la foto de perfil del usuario
        errorMessage: null       // Mensaje de error en caso de fallo en autenticación
    },

    // Definición de los reducers: funciones que modifican el estado
    reducers: {
        
        // Acción para iniciar sesión (login)
        login: (state, { payload }) => {
            state.status = "authenticated";           // Cambia el estado a 'autenticado'
            state.uid = payload.uid;                  // Guarda el uid del usuario
            state.email = payload.email;              // Guarda el email
            state.displayName = payload.displayName;  // Guarda el nombre visible
            state.photoURL = payload.photoURL;        // Guarda la URL de la foto
            state.errorMessage = null;                // Limpia mensajes de error anteriores
        },

        // Acción para cerrar sesión o cuando hay error en login
        logout: (state, { payload }) => {
            state.status = "not-authenticated";       // Cambia el estado a 'no autenticado'
            state.uid = null;                         // Limpia el uid
            state.email = null;                       // Limpia el email
            state.displayName = null;                 // Limpia el nombre visible
            state.photoURL = null;                    // Limpia la URL de la foto
            state.errorMessage = payload?.errorMessage; // Guarda el mensaje de error si existe en el payload
        },

        // Acción que indica que se está verificando el estado de autenticación
        checkingCredentials: (state) => {
            state.status = "checking";                // Cambia el estado a 'verificando'
        },
    },
});

// Exporta las funciones de acción generadas automáticamente por createSlice
export const { login, logout, checkingCredentials } = authSlice.actions;
