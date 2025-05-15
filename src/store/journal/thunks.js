import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";



export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth;
        // console.log(getState());

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote))

    }
}


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe')
        // console.log({ uid });

        const notes = await loadNotes(uid)
        dispatch(setNotes( notes ))

    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note};
        delete noteToFireStore.id

        // console.log(noteToFireStore);
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc(docRef, noteToFireStore,{ merge: true})

        dispatch( updateNote( note ))
    }
}


export const startUploadingFiles = (files = [] ) => {
    return async(dispatch) => {
        dispatch(setSaving());

        // console.log(files);
        // await fileUpload(files[0])
        
        const fileUploadPromises = [];
        for (const file of files ) {
            fileUploadPromises.push( fileUpload( file ))
        }
        const phtosUrls = await Promise.all( fileUploadPromises )
        dispatch(setPhotosToActiveNote(phtosUrls))
        
    } 
}


export const startDeletingNote = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        // console.log({ uid, note });
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);

        await deleteDoc(docRef)

        dispatch( deleteNoteById( note.id ))
        
    }
}