import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNote, editNoteClean, updateNote } from '../../actions/notes';
import { closeModal } from '../../actions/ui';
import useForm from '../../hooks/useForm';


export const Modal = () => {
    const { edit } = useSelector(state => state.note);
    const dispatch = useDispatch();
    const defaultValues = {
        title: '',
        body: '',
    };

    if(edit?.title){
        defaultValues.title = edit.title;
        defaultValues.body = edit.body;
    }

    const [ formValue, handleInputChange ] = useForm({
        title:  defaultValues.title,
        body:   defaultValues.body,
    });
    const {title, body} = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit) {
            dispatch( updateNote(edit.title, title, body) );
            handleClose();
        } else {
            if(isFormValid()){
                dispatch( addNewNote(title, body) );
                handleClose();
            }
        }
      
    }
    const handleClose = () => {
        dispatch( closeModal() );
        dispatch( editNoteClean() );
    }
    const isFormValid = () => {
        if(title.length < 1 || body.length < 1){
            console.log('no title')
            return false;
        }
        return true;
    }
    return (
        <div className="modal__container">
            <i 
                className="fas fa-times modal__close"
                onClick={handleClose}
            />
            <div className="modal-own">
                <div className="modal__header">
                    <i className="fas fa-plus" />
                    <h3 className=" ml-5-own">Agregar Nota</h3>
                </div>

                <div className="modal__content">
                    <form onSubmit={handleSubmit}>
                        <p className="mt-1-own">Título de la Nota</p>
                        <input
                            type="text"
                            placeholder="Ingresar Título"
                            name="title"
                            className="modal__input"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={title}

                        />
                        <p className="mt-5-own">Cuerpo de a Nota</p>
                        <textarea
                            type="text"
                            placeholder="Ingresar el Cuerpo"
                            name="body"
                            className="modal__textarea"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={body}
                        />
                        <hr />
                        <button
                            className="btn-own btn-modal "
                            type="submit"
                        >
                            Añadir Nota
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
