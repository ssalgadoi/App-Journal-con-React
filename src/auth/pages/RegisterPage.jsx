import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";





const formData = {
    displayName: 'Chipy Stola',
    email: 'chipy@google.com',
    password: '123456'
}


const formValidations = {
    email: [( value ) => value.includes('@') , 'Ingrese un correo valido'],
    password:  [( value ) => value.length >= 6, 'El password debe tener más de 6 letras'],
    displayName:  [( value ) => value.length >= 1, 'El nombre es requerido'],
}

export const RegisterPage = () => {

 const  { 
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

const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
    
}

    return (
        <AuthLayout title="Crear Cuenta">
            <form onSubmit={ onSubmit } >
                <Grid container direction="column" spacing={2}>
                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Name"
                            type="text"
                            placeholder="Chipy"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !displayNameValid }
                            helperText={ displayNameValid }
                        />
                    </Grid>
                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid sx={{ width: '100%' }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            
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
