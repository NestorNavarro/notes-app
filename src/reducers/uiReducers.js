import { types } from "../types/types"

const initialState = {
    loading: 0,
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
        default:
            return state;
    }
}