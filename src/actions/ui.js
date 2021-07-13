import { types } from "../types/types";


export const startLoading = () => ({
    type: types.uiStartLoading,
    payload: true,
});

export const finishLoading = () => ({
    type: types.uiFinishLoading,
    payload: false,
});

export const showModal = () => ({
    type: types.uiShowModal,
    payload: true,
});

export const closeModal = () => {
    return {
        type: types.uiCloseModal,
        payload: false, 
    }
}