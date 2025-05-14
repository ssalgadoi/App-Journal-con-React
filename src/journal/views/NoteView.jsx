import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks"
import { useSelector } from "react-redux"
import { useMemo } from "react"



export const NoteView = () => {

    const { active: note } = useSelector(state => state.journal)
    const { body, title, onInputChange, formState, date } = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toLocaleString('es-CL', {
            timeZone: 'America/Santiago',
            weekday: 'long',     // lunes, martes, etc.
            year: 'numeric',
            month: 'long',       // enero, febrero, etc.
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }, [date]);

    return (
        <Grid
            className="animate_animated animate__fadeIn animate__faster"
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Add a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    rows={5}
                    placeholder="What happened today?"
                    name="body"
                    value={body}
                    onChange={onInputChange}

                />
            </Grid>
            <ImageGallery sx={{ mt: 2 }} />
        </Grid>
    )
}
