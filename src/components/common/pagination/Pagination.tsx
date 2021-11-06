import React, {useCallback, useMemo} from "react";
import s from './Pagination.module.css'

type PaginationPropsType = {
    totalCount: number
    count: number
    currentPage: number
    pagesInBlock: number
    requestElements: (currentPage: number, count: number) => void
}

export const Pagination = (props: PaginationPropsType) => {
    const {
        totalCount,
        count,
        currentPage,
        requestElements,
        pagesInBlock
    } = props

    const pagesCount = Math.ceil(totalCount / count)
    const numbersOfPages = []

    for (let i = 1; i <= pagesCount; i++) {
        numbersOfPages.push(i)
    }

    const currentPagesBlock = useMemo(() => (Math.floor((currentPage - 1) / pagesInBlock) * pagesInBlock),
        [currentPage, pagesInBlock])

    const prev = useCallback(() => {
        if (currentPage > pagesInBlock) {
            requestElements(currentPagesBlock - pagesInBlock + 1, count)
        }
    }, [currentPage, pagesInBlock, requestElements, currentPagesBlock, count])
    const next = useCallback(() => {
        if (currentPagesBlock + pagesInBlock < numbersOfPages.length) {
            requestElements(currentPagesBlock + pagesInBlock + 1, count)
        }
    }, [currentPage, pagesInBlock, pagesCount, requestElements, currentPagesBlock, count])

    const startPage = () => {
        requestElements(1, count)
    }
    const endPage = () => {
        requestElements(pagesCount, count)
    }

    return (
        <div className={s.users_page}>
            <div className={s.pages}>

                <div style={{margin: '10px'}} onClick={startPage}> {'<< first page'} </div>

                <div style={{display: "flex", margin: '10px'}}>
                    {currentPage > pagesInBlock &&
                    <div className={s.arrow} onClick={prev}> {'<=='} </div>}

                    {numbersOfPages.slice(currentPagesBlock, currentPagesBlock + pagesInBlock).map(p => {
                        return <span
                            style={{padding: ' 0 5px 0 5px'}}
                            key={p}
                            onClick={() => requestElements(p, count)}
                            className={currentPage === p ? s.selectedPage : ''}>
                    {p} </span>
                    })}

                    {currentPagesBlock + pagesInBlock < numbersOfPages.length &&
                    <div className={s.arrow} onClick={next}> {'==>'} </div>}
                </div>

                <div style={{margin: '10px'}} onClick={endPage}> {'last page >>'} </div>

            </div>
        </div>
    )
}