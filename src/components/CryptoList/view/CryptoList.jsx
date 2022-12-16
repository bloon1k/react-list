import React from 'react'
import './CryptoList.scss'
// Children
import { CryptoCard, useCryptoListControls } from '../../../components'
import { v4 as uuid } from 'uuid'

const CryptoList = ({ currentCoins, firstIndex, lastIndex }) => {
    const { onDragStart, handleSort, onDragEnter, onDragOver } =
        useCryptoListControls(currentCoins, firstIndex, lastIndex)

    return (
        <section className="crypto-list">
            {currentCoins.map((coin, index) => {
                return (
                    <CryptoCard
                        key={uuid()}
                        coinData={coin}
                        index={index}
                        dndHandlers={[
                            onDragStart,
                            onDragEnter,
                            onDragOver,
                            handleSort,
                        ]}
                    />
                )
            })}
        </section>
    )
}

export { CryptoList }
