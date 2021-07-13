import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../ui/Modal';
import { NavBar } from '../ui/NavBar';
import { AddNoteBtn } from './AddNoteBtn';
import { NotesEntries } from './NotesEntries';

export const NotesScreen = () => {
    const {show} = useSelector(state => state.ui);

    return (
        <>
            <div className="notes__main-content">
                <NavBar />
                <AddNoteBtn />
                <main>
                    <NotesEntries />
                </main>
            </div>
            {
                show &&
                    <Modal />
            }
        </>
    );
}
