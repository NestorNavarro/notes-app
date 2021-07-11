import React from 'react';

export const Modal = () => {
    return (
        <div className="modal__container">
            <i className="fas fa-times modal__close"></i>
            <div className="modal-own">
                <div className="modal__header">
                    <i className="fas fa-plus pointer-own" />
                    <h3 className=" ml-5-own">Agregar Nota</h3>
                </div>

                <div className="modal__content">
                    <form>
                        <p className="mt-1-own">Título de la Nota</p>
                        <input
                            type="text"
                            placeholder="Ingresar Título"
                            name="title"
                            className="modal__input"
                            autoComplete="off"
                        />
                        <p className="mt-5-own">Cuerpo de a Nota</p>
                        <textarea
                            type="text"
                            placeholder="Ingresar el Cuerpo"
                            name="text"
                            className="modal__textarea"
                            autoComplete="off"
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
