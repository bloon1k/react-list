import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { setCryptosList } from '../../../redux'

const useCryptoListControls = (currentCoins, firstIndex, lastIndex) => {
    const dispatch = useDispatch()
    const cryptosList = useSelector((state) => state.cryptos.cryptosList)

    const draggedItemIndex = useRef(null)
    const currentlyOverItemIndex = useRef(null)

    function onDragStart(index) {
        draggedItemIndex.current = index
    }

    function onDragEnter(index) {
        currentlyOverItemIndex.current = index
    }

    function onDragOver(e) {
        e.preventDefault()
    }

    function handleSort() {
        // reorder current 20 items
        const items = [...currentCoins]
        const [reorderedItem] = items.splice(draggedItemIndex.current, 1)
        items.splice(currentlyOverItemIndex.current, 0, reorderedItem)

        // push reordered current list to general list
        const newCoinsList = [
            ...cryptosList.slice(0, firstIndex),
            ...items,
            ...cryptosList.slice(lastIndex),
        ]

        dispatch(setCryptosList(newCoinsList))

        draggedItemIndex.current = null
        currentlyOverItemIndex.current = null
    }

    return { onDragStart, onDragEnter, onDragOver, handleSort }
}

export { useCryptoListControls }
