import { useState } from 'react'
import { useSelector } from 'react-redux'

const usePaginatedCryptosControls = () => {
    const cryptosList = useSelector((state) => state.cryptos.cryptosList)
    const [coinsPerPage] = useState(20)

    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * coinsPerPage
    const firstIndex = lastIndex - coinsPerPage

    const currentCoins = cryptosList.slice(firstIndex, lastIndex)

    function changePage(pageNumber) {
        setCurrentPage(pageNumber)
    }

    return {
        cryptosList,
        coinsPerPage,
        changePage,
        currentPage,
        currentCoins,
        firstIndex,
        lastIndex,
    }
}

export { usePaginatedCryptosControls }
