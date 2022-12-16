import { useSelector } from 'react-redux'

const usePaginationControls = (currentPage, changePage, coinsPerPage) => {
    const totalCoins = useSelector((state) => state.cryptos.cryptosList).length

    const pagesList = []
    pagesList.length = Math.ceil(totalCoins / coinsPerPage)
    pagesList.fill(1)

    function nextPage() {
        if (currentPage !== pagesList.length) {
            changePage(currentPage + 1)
        }
    }

    function previousPage() {
        if (currentPage > 1) {
            changePage(currentPage - 1)
        }
    }

    return { pagesList, nextPage, previousPage }
}

export { usePaginationControls }
