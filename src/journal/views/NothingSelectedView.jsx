import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
    return (
        <Grid className="animate_animated animate__fadeIn animate__faster"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5 }}
        >
            <Grid >
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid >
                <Typography variant="h5" color="white">Selected or create a new note.</Typography>
            </Grid>
        </Grid>
    )
}
