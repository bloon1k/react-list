import { GET_CRYPTOS_LIST, SET_CRYPTOS_LIST } from '../constants'

const setCryptosList = (list) => {
    return {
        type: SET_CRYPTOS_LIST,
        payload: list,
    }
}

const getCryptosList = () => {
    return {
        type: GET_CRYPTOS_LIST,
    }
}

export { setCryptosList, getCryptosList }
