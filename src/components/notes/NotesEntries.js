import React from 'react'
import { useSelector } from 'react-redux';
import { NoteEntry } from './NoteEntry';

export const NotesEntries = () => {
    const {notes} = useSelector(state => state.note)

    return (
        <div className="card-columns">
            {
                notes.map((note, index) => (
                    <NoteEntry 
                        key={note.title + index} 
                        note={note}
                    />
                ))
            }
        </div>
    );
}
