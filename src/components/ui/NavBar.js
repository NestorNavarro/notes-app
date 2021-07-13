import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import { cleaningNote } from '../../actions/notes';

export const NavBar = () => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch( logout() );
        dispatch( cleaningNote() );
    }
    return (
        <ul className="notes__navbar">
            <li className="notes__navbar-content ml-5-own">
                <i className="far fa-check-square"/>
            </li>
            <li className="notes__navbar-content">
                <i className="far fa-comment-alt"/>
            </li>
            <li className="notes__navbar-content">
                <i className="far fa-envelope"/>
            </li>
            <li className="notes__navbar-content">
                <i className="far fa-calendar"/>
            </li>
            <li className="notes__navbar-content ">
                <i className="far fa-star cl-star"/>
            </li>
            <li className="notes__navbar-content fl-r mr-5-own pointer-own">
                <i 
                    className="fas fa-power-off btn-icon"
                    onClick={handleLogout}
                />
            </li>
            <li className="notes__navbar-content fl-r">
                <span >{user?.name}</span>
            </li>
        </ul>
    );
}
