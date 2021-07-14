import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { logout, startRecoverPassword } from '../../actions/auth';
import { handleErrors } from '../../helpers/handleErrors';
import useForm from '../../hooks/useForm';

export const RecoverScreen = ( value ) => {
    const { history } = value;

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);
    const auth = useSelector(state => state.auth);

    const [error, setError] = useState(true);
    const [ formValue, handleInputChange ] = useForm({ email: 'martin@inprodi.com' });
    const {email} = formValue;
    const input = document.getElementsByTagName('input');

    useEffect(() => {
        if(auth?.token){
            handleErrors(true, input, setError);
            history.push('/auth/reset');
        } 
        if(auth?.err) {
            handleErrors(false, input, setError);
        }
    }, [auth, input, history]);
   
    const handleRecover = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch( startRecoverPassword(email) );
        }
    }
    const isFormValid = () => {
        const isValid = validator.isEmail(email)
        if(!isValid){
            handleErrors(false, input, setError);
            return false;
        }
        handleErrors(isValid, input, setError);
        return true;
    }
    const handleBackPage = () => {
        dispatch( logout() );
    }

    return (
        <>
            <h3 className="auth__title mb-5-own">¿Olvidaste tu constraseña</h3>
            <p className="mb-5-own">
                Ingresa tu correo electrónico y te enviaremos
                intrucciones para restablecer tu contraseña
            </p>
            <form onSubmit={ handleRecover }>
                <p>Correo Electrónico</p>
                <input
                    type="text"
                    placeholder="   Ingresa tu Correo Electrónico"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <p
                    className="auth__text-error"
                    hidden={error}
                >
                    Ingresa un correo electrónico válido.<br />
                    El correo electrónico no está asociado a ninguna cuenta.
                </p>
                <button
                    className="btn-own btn-primary-own btn-block mt-5-own l-sp"
                    type="submit"
                    disabled={loading}
                >
                    Enviar Instrucciones
                </button>
                <Link
                    className="link link__back mt-5-own"
                    to="/auth/login"
                    onClick={handleBackPage}
                >
                    Regresar
                </Link>
            </form>
        </>
    );
}
