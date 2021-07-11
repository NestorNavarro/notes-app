import React from 'react';

export const NoteEntry = () => {
    return (
        <div className="card notes__entry">
            <div className="notes__entry-head">
                <h3 className="notes__entry-title">¡Title!</h3>
                <div className="notes__head-icons">
                    <i className="far fa-edit  fa-lg mr-5-own" ></i>
                    <i className="fas fa-times  fa-lg"></i>
                </div>
            </div>
            <hr/>
            <div className="notes__entry-body">
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum, 
                    pariatur ex quas similique atque at consequuntur expedita doloribus, dolorum, 
                    odio fugit unde incidunt minima maxime nulla. Est, ad maiores.
                </p>
            </div>
        </div>
    );
}
