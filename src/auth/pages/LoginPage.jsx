import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
    return (
        <AuthLayout title="Login!!!">
            <form>
                <Grid container direction="column" spacing={2}>
                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>


                    {/* Botones con margen superior */}
                    <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
                        <Grid sx={{ width: '100%' }}>
                            <Button variant="outlined" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid sx={{ width: '100%' }}>
                            <Button variant="contained" fullWidth>
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
