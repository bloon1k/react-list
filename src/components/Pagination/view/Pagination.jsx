import React from 'react'
import './Pagination.scss'
import { v4 as uuid } from 'uuid'
import { usePaginationControls } from '../model'

const Pagination = ({ changePage, currentPage, coinsPerPage }) => {
    const { pagesList, nextPage, previousPage } = usePaginationControls(
        currentPage,
        changePage,
        coinsPerPage
    )

    return (
        <section className={'pagination'}>
            {pagesList.length ? (
                <div className="pagination__controls">
                    <button
                        className={'pagination__item previous'}
                        onClick={previousPage}
                    >
                        {'<= previous'}
                    </button>
                    <button
                        className={'pagination__item next'}
                        onClick={nextPage}
                    >
                        {'next =>'}
                    </button>
                </div>
            ) : null}
            <div className="pagination__pages">
                {pagesList.map((_, index) => (
                    <button
                        className={`pagination__item ${
                            index + 1 === currentPage ? 'selected' : ''
                        }`}
                        key={uuid()}
                        onClick={() => changePage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    )
}

export { Pagination }
