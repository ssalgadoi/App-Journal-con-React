import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


// Carga de notas del usuario
export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const notes = [];

    docs.forEach(doc => {
        console.log('Nota:', doc.id, doc.data());
        notes.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    // console.log(notes);
    return notes;
};
