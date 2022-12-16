import { SET_CRYPTOS_LIST } from '../constants'

const initialState = {
    cryptosList: [],
}

export const cryptosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CRYPTOS_LIST: {
            return {
                ...state,
                cryptosList: action.payload,
            }
        }
        default:
            return state
    }
}
