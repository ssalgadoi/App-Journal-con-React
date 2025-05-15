import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from '../../hooks/useForm'
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';



export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal)

    const { body, title, date, onInputChange, formState } = useForm( note )
   
    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString()
    }, [ date ])
   
    useEffect(() => {
        dispatch( setActiveNote(formState))
    }, [ formState ])

    useEffect(() => {
      if ( messageSaved.length > 0) {
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved])
    
    const onSaveNote = () => {
        dispatch(startSaveNote())
    }
    return (
        <Grid className="animate_animated animate__fadeIn animate__faster" container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid >
                <Typography fontSize={39} fontWeight='light'>{ dateString }</Typography>
            </Grid>
            <Grid >
                <Button
                disabled={ isSaving } 
                onClick={ onSaveNote }
                color="primary" 
                sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    rows={5}
                    placeholder="Que sucedio hoy?"
                    name="body"
                    value={ body }
                    onChange={ onInputChange }

                />
            </Grid>
            <ImageGallery sx={{ mt: 2 }} />
        </Grid>
    )
}
