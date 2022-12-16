import React from 'react'
import {
    CryptoList,
    Pagination,
    usePaginatedCryptosControls,
} from '../../../components'

const PaginatedCryptos = () => {
    const {
        coinsPerPage,
        changePage,
        currentPage,
        currentCoins,
        firstIndex,
        lastIndex,
    } = usePaginatedCryptosControls()

    // const paginationElement = useMemo(() => {
    //     console.log('element changed')
    //     return (
    //         <Pagination
    //             currentPage={currentPage}
    //             changePage={changePage}
    //             coinsPerPage={coinsPerPage}
    //         />
    //     )
    // }, [currentPage])

    return (
        <>
            <CryptoList
                currentCoins={currentCoins}
                firstIndex={firstIndex}
                lastIndex={lastIndex}
            />
            <Pagination
                currentPage={currentPage}
                changePage={changePage}
                coinsPerPage={coinsPerPage}
            />
        </>
    )
}

export { PaginatedCryptos }
