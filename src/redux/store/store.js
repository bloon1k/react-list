import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas'
import { cryptosReducer } from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cryptos: cryptosReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
