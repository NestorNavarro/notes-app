import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { logout, startEmailPassword } from '../../actions/auth';
import { handleErrors } from '../../helpers/handleErrors';
import useForm from '../../hooks/useForm';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
    const auth = useSelector(state => state.auth);

    const [error, setError] = useState(true);
    const [ formValue, handleInputChange ] = useForm({
        email: '',
        password: '',
    });
    const {email, password} = formValue;
    const input = document.getElementsByTagName('input');

    useEffect(() => {
        if(auth?.token){
            handleErrors(true, input, setError);
        } 
        if(auth?.err) {
            handleErrors(false, input, setError);
        }
    }, [auth, input]);

    const handleLogin = async(e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch( startEmailPassword(email, password) );
        }
    }
    const isFormValid = () => {
        const isValid = validator.isEmail(email);
        if(!isValid){    
            handleErrors(isValid, input, setError);
            return false;
        }
        handleErrors(isValid, input, setError);
        return true;
    }
    const handleRedirect = () => {
        dispatch( logout() );
    }
    return (
        <>
            <h3 className="auth__title mb-5-own">¡Bienvenido de nuevo!</h3>
            <p className="mb-5-own">
                Ingresa con tu usuario y contraseña para acceder a la plataforma.
            </p>
            <form onSubmit={handleLogin}>
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
                <div className="auth__passwor-title mt-5-own">
                    <p>Contraseña</p>
                    <Link
                        className="link"
                        to="/auth/recover"
                        onClick={handleRedirect}
                    >
                        ¿Olvidaste tu constraseña?
                    </Link>
                </div>
                <input
                    type="password"
                    placeholder="   Ingresa tu Contraseña"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <p
                    className="auth__text-error mb-5-own"
                    hidden={error}
                >
                    La contraseña ingresada es incorrecta.
                </p>
                <button
                    className="btn-own btn-primary-own btn-block mt-5-own"
                    type="submit"
                    disabled={loading}
                >
                    Ingresar
                </button>
            </form>
        </>
    );
}
