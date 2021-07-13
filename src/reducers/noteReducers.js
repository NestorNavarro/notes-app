import { types } from "../types/types";

const intialState = {
    notes: [],
    edit: null,
}

export const noteReducers = (state = intialState, action) => {
    switch (action.type) {
        case types.noteEdit:
            return{
                ...state,
                edit: {
                    title: action.payload.title,
                    body: action.payload.body,
                } 
            }
        case types.noteEditClean:
            return {
                ...state,
                edit: null,
            }
        case types.noteAddNew:
            return {
                ...state,
                notes: [action.payload,  ...state.notes],
            }
        case types.noteUpdate:
            return{
                ...state,
                notes: state.notes.map(
                    note => note.title === action.payload.id
                    ? action.payload.note
                    : note
                )
            }
        case types.noteDelete:
            return{
                ...state,
                active: null,
                notes: state.notes.filter(
                    note => note.title !== action.payload.id
                )
            }
        case types.noteCleaning:
            return intialState;
        default:
            return state;
    }
}