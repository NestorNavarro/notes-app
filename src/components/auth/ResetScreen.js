import React from 'react';
import { Link } from 'react-router-dom';

export const ResetScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5-own">Restablecer Contraseña</h3>
            <p className="mb-5-own">
                Establece tu nueva constraseña y guárdala en un 
                lugar seguro.
            </p>
            <form>
                <p>Nueva contraseña</p>
                <input
                    type="password"
                    placeholder="   Ingresa Nueva contraseña"
                    name="password"
                    className="auth__input"
                />
                <p
                    className="auth__text-error mb-5-own"
                    hidden={true}
                >
                    La contraseña debe tener al menos 8 caracteres,<br />
                    caracters espcieles , letras mayúsculas y minúsculas.<br />
                    La contraseña ingresada no puede ser igual que la actual.
                </p>
                <p className="mt-5-own">Confirmar contraseña</p>
                <input
                    type="password"
                    placeholder="   Confirmar contraseña"
                    name="password"
                    className="auth__input"
                />
                <p
                    className="auth__text-error mb-5-own"
                    hidden={true}
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
                    className="link link__back mt-5-own"
                    to="/auth/login"
                >
                    Regresar
                </Link>
            </form>
        </>
    );
}
