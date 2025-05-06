import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid
                className='box__shadow'
                sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    width: { sm: 450}
                    // width: '100%',
                    // maxWidth: 400
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ mb: 1}}
                >
                    {title}
                </Typography>

                {children}
            </Grid>
        </Grid>
    );
};
