import React from 'react'
import './CryptoCard.scss'

const CryptoCard = ({ coinData, index, dndHandlers }) => {
    const [onDragStart, onDragEnter, onDragOver, handleSort] = dndHandlers
    const { image, name, current_price } = coinData

    return (
        <div
            className={'crypto-card'}
            draggable={true}
            onDragStart={() => onDragStart(index)}
            onDragEnter={() => onDragEnter(index)}
            onDragEnd={handleSort}
            onDragOver={onDragOver}
        >
            <div className={'crypto-card__image'}>
                <img src={image} alt={name} />
            </div>
            <div className={'crypto-card__info'}>
                <p>{name}</p>
                <p>${current_price}</p>
            </div>
        </div>
    )
}

export { CryptoCard }
