import React, {useCallback, useMemo} from "react";
import s from './Pagination.module.css'

type PaginationPropsType = {
    totalCount: number
    count: number
    currentPage: number
    requestUsers: (currentPage: number, current: number) => void
}

export const Pagination = (props: PaginationPropsType) => {
    const {
        totalCount,
        count,
        currentPage,
        requestUsers
    } = props

    const pagesCount = Math.ceil(totalCount / count)
    const numbersOfPages = []
    const pagesInBlock = 10

    for (let i = 1; i <= pagesCount; i++) {
        numbersOfPages.push(i)
    }

    const currentPagesBlock = useMemo(() => (Math.floor((currentPage - 1) / pagesInBlock) * pagesInBlock),
        [currentPage, pagesInBlock])

    const prev = useCallback(() => {
        if (currentPage > pagesInBlock) {
            requestUsers(currentPagesBlock - pagesInBlock + 1, count)
        }
    }, [currentPage, pagesInBlock, requestUsers, currentPagesBlock, count])
    const next = useCallback(() => {
        if (currentPagesBlock + pagesInBlock < numbersOfPages.length) {
            requestUsers(currentPagesBlock + pagesInBlock + 1, count)
        }
    }, [currentPage, pagesInBlock, pagesCount, requestUsers, currentPagesBlock, count])

    const startPage = () => {
        requestUsers(1, count)
    }
    const endPage = () => {
        requestUsers(pagesCount, count)
    }

    return (<div className={s.users_page}>
            <div className={s.pages}>

                <div style={{margin: '10px'}} onClick={startPage}> {'<< first page'} </div>

                <div style={{display: "flex", margin: '10px'}}>
                    {currentPage > pagesInBlock &&
                    <div style={{marginRight: '20px'}} onClick={prev}> {'<=='} </div>}

                    {numbersOfPages.slice(currentPagesBlock, currentPagesBlock + pagesInBlock).map(p => {
                        return <span
                            style={{padding: ' 0 5px 0 5px'}}
                            key={p}
                            onClick={() => requestUsers(p, count)}
                            className={currentPage === p ? s.selectedPage : ''}>
                    {p} </span>
                    })}

                    {currentPagesBlock + pagesInBlock < numbersOfPages.length &&
                    <div style={{marginLeft: '20px'}} onClick={next}> {'==>'} </div>}
                </div>

                <div style={{margin: '10px'}} onClick={endPage}> {'last page >>'} </div>

            </div>
        </div>
    )
}