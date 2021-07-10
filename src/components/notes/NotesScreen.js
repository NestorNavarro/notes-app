import React from 'react';
import { NavBar } from '../ui/NavBar';
import { AddNoteBtn } from './AddNoteBtn';
import { NotesEntries } from './NotesEntries';

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NavBar />
            <AddNoteBtn />
            <main>
               <NotesEntries />
            </main>
        </div>
    );
}
