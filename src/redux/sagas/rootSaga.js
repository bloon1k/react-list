import { takeEvery, put, call } from '@redux-saga/core/effects'
import { handleFetch } from '../../utils'
import { GET_CRYPTOS_LIST } from '../constants'
import { setCryptosList } from '../actions'

// worker saga
export function* handleFetchCryptos() {
    const data = yield call(handleFetch)
    yield put(setCryptosList([...data, ...data, ...data]))
}

// watcher saga
export function* watchFetchCryptosSaga() {
    yield takeEvery(GET_CRYPTOS_LIST, handleFetchCryptos)
}

export function* rootSaga() {
    yield watchFetchCryptosSaga()
}
