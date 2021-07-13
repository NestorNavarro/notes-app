import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../../actions/notes';
import { showModal } from '../../actions/ui';

export const NoteEntry = ({note}) => {
    const dispatch = useDispatch();

    const {title, body} = note;

    const handleEditNote = () => {
        dispatch( editNote(title, body) );
        dispatch( showModal() );
    }
    const handleDelete = () => {
        dispatch( deleteNote(title) );
    }
    return (
        <div className="card notes__entry">
            <div className="notes__entry-head">
                <h3 className="notes__entry-title">{title}</h3>
                <div className="notes__head-icons">
                    <i 
                        className="far fa-edit  fa-lg mr-5-own" 
                        onClick={handleEditNote}
                    />
                    <i 
                        className="fas fa-times  fa-lg" 
                        onClick={handleDelete}
                    />
                </div>
            </div>
            <hr/>
            <div className="notes__entry-body">
                <p className="card-text">
                    {body}
                </p>
            </div>
        </div>
    );
}
