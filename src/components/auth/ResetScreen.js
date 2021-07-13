import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { logout, startResetPassword } from '../../actions/auth';
import { handleErrors } from '../../helpers/handleErrors';
import useForm from '../../hooks/useForm';

export const ResetScreen = ( value ) => {
    const {history} = value; 
    const input = document.getElementsByTagName('input');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    if(!auth.token){
        history.replace('/auth/login')
    }

    useEffect(() => {
        if(auth?.err) {
            handleErrors(false, input, setError);
        } else{
            handleErrors(true, input, setError);
        }
    }, [auth, input]);

    const [error, setError] = useState(true);
    const [ formValue, handleInputChange ] = useForm({
        password1: '',
        password2: '',
    });
    const {password1, password2} = formValue;

    const handleReset = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch( startResetPassword(auth.token, password1, history) );
            console.log('succes')
        } 
    }
    const isFormValid = () => {
        if(!validator.isStrongPassword(password1)){
            handleErrors(false, input, setError);
            return false;
        }
        if(password1 !== password2) {
            handleErrors(false, input, setError);
            return false;
        }
        handleErrors(true, input, setError);
        return true;
    }
    const handleBack = () => {
        dispatch( logout() );
    }
    return (
        <>
            <h3 className="auth__title mb-5-own">Restablecer Contraseña</h3>
            <p className="mb-5-own">
                Establece tu nueva constraseña y guárdala en un 
                lugar seguro.
            </p>
            <form onSubmit={handleReset}>
                <p>Nueva contraseña</p>
                <input
                    type="password"
                    placeholder="   Ingresa Nueva contraseña"
                    name="password1"
                    className="auth__input"
                    value={password1}
                    onChange={handleInputChange}
                />
                <p
                    className="auth__text-error mb-5-own"
                    hidden={error}
                >
                    La contraseña debe tener al menos 8 caracteres,<br />
                    caracters espcieles , letras mayúsculas y minúsculas.<br />
                    La contraseña ingresada no puede ser igual que la actual.
                </p>
                <p className="mt-5-own">Confirmar contraseña</p>
                <input
                    type="password"
                    placeholder="   Confirmar contraseña"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <p
                    className="auth__text-error mb-5-own"
                    hidden={error}
                >
                    Las contraseñas no coinciden.
                </p>
                <button
                    className="btn-own btn-primary-own btn-block mt-5-own l-sp"
                    type="submit"
                    disabled={false}
                >
                    Restablecer contraseña
                </button>
                <Link
                    onClick={handleBack}
                    className="link link__back mt-5-own"
                    to="/auth/login"
                >
                    Regresar
                </Link>
            </form>
        </>
    );
}
