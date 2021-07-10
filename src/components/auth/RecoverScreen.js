import React from 'react';
import { Link } from 'react-router-dom';

export const RecoverScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5-own">¿Olvidaste tu constraseña</h3>
            <p className="mb-5-own">
                Ingresa tu correo electrónico y te enviaremos
                intrucciones para restablecer tu contraseña
            </p>
            <form>
                <p>Correo Electrónico</p>
                <input
                    type="text"
                    placeholder="   Ingresa tu Correo Electrónico"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <p
                    className="auth__text-error"
                    hidden={true}
                >
                    Ingresa un correo electrónico válido.<br /><br />
                    El correo electrónico no está asociado a ninguna cuenta.
                </p>
                <button
                    className="btn-own btn-primary-own btn-block mt-5-own l-sp"
                    type="submit"
                    disabled={false}
                >
                    Enviar Instrucciones
                </button>
                <Link
                    className="link link__back mt-5-own"
                    to="/auth/login"
                >
                    Regresar
                </Link>
            </form>
        </>
    );
}
