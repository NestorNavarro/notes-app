import { types } from "../types/types";


export const editNote = (title, body) => ({
    type: types.noteEdit,
    payload: {
        title,
        body,
    }
});

export const editNoteClean = () => ({
    type: types.noteEditClean,
});

export const addNewNote = (title, body) => ({
    type: types.noteAddNew,
    payload: {
        title,
        body,
    }
});

export const updateNote = (id, title, body) => ({
    type: types.noteUpdate,
    payload: {
        id,
        note:{
            title,
            body,
        } 
    }
});

export const deleteNote = (id) => ({
    type: types.noteDelete,
    payload: {
        id,
    }
});

export const cleaningNote = () => ({
    type: types.noteCleaning
});