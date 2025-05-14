import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {  startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";  // Importa la nueva acción
import { useMemo } from "react";


const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm( formData );

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        // Llamamos a la acción de login con email y contraseña
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}  className="animate_animated animate__fadeIn animate__faster">
                <Grid container direction="column" spacing={2}>
                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            onChange={onInputChange}
                            value={email}
                        />
                    </Grid>

                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            onChange={onInputChange}
                            value={password}
                        />
                    </Grid>

                    {/* Mostrar un error si hay uno */}
                    {errorMessage && (
                        <Grid sx={{ width: '100%' }}>
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    )}

                    <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
                        <Grid sx={{ width: '100%' }}>
                            <Button disabled={isAuthenticating} type="submit" variant="outlined" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid sx={{ width: '100%' }}>
                            <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="end" sx={{ mt: 2 }}>
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear Cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
