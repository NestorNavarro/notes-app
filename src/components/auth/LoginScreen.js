import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5-own">¡Bienvenido de nuevo!</h3>
            <p className="mb-5-own">
                Ingresa con tu usuario y contraseña para acceder a la plataforma.
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
                <div className="auth__passwor-title mt-5-own">
                    <p>Contraseña</p>
                    <Link
                        className="link"
                        to="/auth/recover"
                    >
                        ¿Olvidaste tu constraseña?
                    </Link>
                </div>
                <input
                    type="password"
                    placeholder="   Ingresa tu Contraseña"
                    name="password"
                    className="auth__input"
                />
                <p
                    className="auth__text-error mb-5-own"
                    hidden={true}
                >
                    La contraseña ingresada es incorrecta.
                </p>
                <button
                    className="btn-own btn-primary-own btn-block mt-5-own"
                    type="submit"
                    disabled={false}
                >
                    Ingresar
                </button>
            </form>
        </>
    );
}
