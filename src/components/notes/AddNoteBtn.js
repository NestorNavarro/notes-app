import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../actions/ui';

export const AddNoteBtn = () => {
    const dispatch = useDispatch();

    const handleAddNote = () => {
        dispatch( showModal() );
    }
    return (
        <div className="add__content-btn">
            <button 
                className="btn-own btn-add-note l-sp"
                onClick={handleAddNote}
            >
                <i className="far fa-plus-square add__i-color mr-2-own"></i>
                Agregar Nota
            </button>
        </div>
    );
}
