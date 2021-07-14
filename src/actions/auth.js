import { formDataLoging, formDataRecoverPassword, formDataResetPassword } from "../helpers/authformData";
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";

export const startEmailPassword = (email, password) => {
    return async(dispatch) => {
        dispatch( startLoading() );
        const resp = await formDataLoging(email, password); 
        if(resp?.token) {
            const {token, user} = resp;
            dispatch( login(token, user._id, user.name) );
        } else{
           const {err} = resp;
           dispatch( notUserFound(err) );
        }
        dispatch( finishLoading() );
    };
}

export const startRecoverPassword = (email) => {
    return async(dispatch) => {
        dispatch( startLoading() );
        const resp = await formDataRecoverPassword(email); 
        if(resp?.token) {
            const {token} = resp;
            dispatch( recoverPassword(token, email) );
        } else{
           const {err} = resp;
           dispatch( notUserFound(err) );
        }
        dispatch( finishLoading() );
    };
}

export const startResetPassword = (token, password, history) => {
    return async(dispatch) => {
        dispatch( startLoading() );
        const resp = await formDataResetPassword(token, password); 
        if(resp?.ok) {
            history.replace('/auth/login');
        } else if(resp?.err){
            const {err} = resp;
            dispatch( samePassword(token, err) );
        }     
        dispatch( finishLoading() );
    };
} 

export const notUserFound = (err) => ({
    type: types.authNotUser,
    payload: {
        err
    }
});

export const login = (token, uid, name) => ({
    type: types.authLogin,
    payload: {
        token,
        user: {
            uid,
            name,
        }
    }
});

export const logout = () => ({
    type: types.authLogout,
});

export const recoverPassword = (token, email) => ({
    type: types.authRecoverPassword,
    payload: {
        token,
        user: {
            email,
        }
    }
});

export const samePassword = (token, err) => ({
    type: types.authErrorSamePassword,
    payload: {
        token,
        err
    }
})