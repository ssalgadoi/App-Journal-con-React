import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";





const formData = {
    displayName: '',
    email: '',
    password: ''
}


const formValidations = {
    email: [(value) => value.includes('@'), 'Ingrese un correo valido'],
    password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es requerido'],
}

export const RegisterPage = () => {

    const [ formSubmited, setFormSubmited ] = useState(false);

    const {
        formState,
        displayName,
        email,
        password,
        onInputChange,
        displayNameValid,
        isFormValid,
        emailValid,
        passwordValid
    } = useForm(formData, formValidations);

    console.log( displayNameValid );
    

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmited(true)
        console.log(formState);

    }

    return (
        <AuthLayout title="Crear Cuenta">
            <h1>FormValid: { isFormValid ? 'Válido': 'Incorrecto' }</h1>
            <form onSubmit={onSubmit} >
                <Grid container direction="column" spacing={2}>
                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Nombre Completo"
                            type="text"
                            placeholder="Chipy Stola"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={ !!displayNameValid && formSubmited}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={ !!emailValid && formSubmited}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={ !!passwordValid && formSubmited}
                            helperText={passwordValid}

                        />
                    </Grid>


                    {/* Botones con margen superior */}
                    <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
                        <Grid sx={{ width: '100%' }}>
                            <Button type="submit" variant="outlined" fullWidth>
                                Crear una Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="end" sx={{ mt: 2 }}>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>


    );
};
