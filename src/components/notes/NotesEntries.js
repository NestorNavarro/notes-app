import React from 'react'
import { NoteEntry } from './NoteEntry';

export const NotesEntries = () => {
    const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    return (
        <div className="card-columns">
            {
                notes.map(note => (
                    <NoteEntry key={note} />
                ))
            }
        </div>
    );
}
