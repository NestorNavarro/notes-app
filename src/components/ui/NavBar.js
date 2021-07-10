import React from 'react';

export const NavBar = () => {
    return (
        <ul className="notes__navbar">
            <li className="notes__navbar-content ml-5-own">
                <i className="far fa-check-square"></i>
            </li>
            <li className="notes__navbar-content">
                <i className="far fa-comment-alt"></i>
            </li>
            <li className="notes__navbar-content">
                <i className="far fa-envelope"></i>
            </li>
            <li className="notes__navbar-content">
                <i className="far fa-calendar"></i>
            </li>
            <li className="notes__navbar-content ">
                <i className="far fa-star cl-star"></i>
            </li>
            <li className="notes__navbar-content fl-r mr-5-own pointer-own">
                <i className="fas fa-power-off btn-icon"></i>
            </li>
            <li className="notes__navbar-content fl-r">
                <span >Nestor Eduardo Navarro Arizaga</span>
            </li>
        </ul>
    );
}
