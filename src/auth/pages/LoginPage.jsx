import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";





export const LoginPage = () => {

    const dispatch = useDispatch()

    const  { email, password, onInputChange } = useForm({
        email: 'chipy@google.com',
        password: '123456'
    });


    const onSubmit = (event ) => {
        event.preventDefault();
        console.log({ email, password});
        dispatch( checkingAuthentication() )
        
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn())
        
    }
    return (
        <AuthLayout title="Login!!!">
            <form onSubmit={ onSubmit }>
                <Grid container direction="column" spacing={2}>
                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            onChange={ onInputChange }
                            value={ email }
                        />
                    </Grid>

                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            onChange={ onInputChange }
                            value={ password }
                        />
                    </Grid>


                    {/* Botones con margen superior */}
                    <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
                        <Grid sx={{ width: '100%' }}>
                            <Button type="submit" variant="outlined" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid sx={{ width: '100%' }}>
                            <Button onClick={ onGoogleSignIn } variant="contained" fullWidth>
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
