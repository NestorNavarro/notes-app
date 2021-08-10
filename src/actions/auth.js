import Swal from "sweetalert2";
import { fetchWithOutToken, fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types";


export const startLogin = (email, password) => {
    return async(dispatch) => {
        const rep = await fetchWithOutToken('auth', {email, password}, 'POST');
        const body = await rep.json();

        if(body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( login({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            let error;
            if(body?.msg) {
                error = body.msg
            }
            else {
                error = body.password.msg
            }
            Swal.fire('Error', error, 'error');
        }
    }
}

export const startRegister = (email, password, name) => {
    return async(dispatch) => {
        const rep = await fetchWithOutToken('auth/new', {name, email, password}, 'POST');
        const body = await rep.json();

        if(body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( login({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            if(body.msg) {
                return Swal.fire('Error', body.msg, 'error');
            } else {
                const { errors } = body;
                if(errors.email) {
                    return Swal.fire('Error', errors.email.msg, 'error');
                }  
                return Swal.fire('Error', errors.password.msg, 'error');
            }
        }
    }
}

export const startChecking = () => {
    return async(dispatch) => {
        const rep = await fetchWithToken('auth/renew');
        const body = await rep.json();

        if(body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( login({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            dispatch( checkingFinish() );  
        }
    }
}

const checkingFinish = () =>( { type: types.authCheckingFinish } );

const login = (user) => ({
    type: types.authLogin,
    payload: user,
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout });