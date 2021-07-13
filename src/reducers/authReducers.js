import { types } from "../types/types";

export const authReducers = (state = {}, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                token: action.payload.token,
                user: {
                    uid: action.payload.user.uid,
                    name: action.payload.user.name,
                }
            };
        case types.authNotUser:
            return {
                err: action.payload.err
            }
        case types.authRecoverPassword:
            return {
                token: action.payload.token,
                user: {
                    email: action.payload.user.email
                }
            }
        case types.authErrorSamePassword:
            return {
                token: action.payload.token,
                err: action.payload.err,
            }
        case types.authLogout:
            return {};
        default:
            return state;
    }
}