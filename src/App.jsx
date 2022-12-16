import React from 'react'
import './styles/index.scss'
// Children
import { PaginatedCryptos } from './components'
import { useDispatch } from 'react-redux'
import { getCryptosList } from './redux'

const App = () => {
    const dispatch = useDispatch()

    return (
        <div className={'app'}>
            <div
                className={'app__components-wrapper'}
                onDragOver={(e) => e.preventDefault()}
            >
                <button
                    className={'button app__button'}
                    onClick={() => dispatch(getCryptosList())}
                >
                    Fetch Cryptos!
                </button>
                <PaginatedCryptos />
            </div>
        </div>
    )
}

export default App
