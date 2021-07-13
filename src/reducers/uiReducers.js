import { types } from "../types/types"

const initialState = {
    loading: 0,
    show: false,
}

export const uiReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: action.payload,
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: action.payload,
            }
        case types.uiShowModal:
            return {
                ...state,
                show: action.payload,
            }
        case types.uiCloseModal:
        return {
            ...state,
            show: action.payload,
        }
        default:
            return state;
    }
}