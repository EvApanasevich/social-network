import React, {useCallback, useMemo} from 'react'
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {User} from "../user/User";
import {Preloader} from "../common/preloader/Preloader";

type PropsType = {
    users: Array<UserType>
    totalCount: number
    count: number
    currentPage: number
    loading: boolean
    followingProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, current: number) => void
}

export const Users = (props: PropsType) => {
    const {users, totalCount, count, currentPage, loading, followingProgress, follow, unfollow, getUsers} = props

    const pagesCount = Math.ceil(totalCount / count)
    const numbersOfPages = []
    const pagesInBlock = 10

    for (let i = 1; i <= pagesCount; i++) {
        numbersOfPages.push(i)
    }

    const currentBlockPages = useMemo(() => (Math.floor((currentPage - 1) / pagesInBlock) * pagesInBlock),
        [currentPage, pagesInBlock])

    const prev = useCallback(() => {
        if (currentPage > pagesInBlock) {
            getUsers(currentBlockPages - pagesInBlock + 1, count)
        }
    }, [currentPage, pagesInBlock, getUsers, currentBlockPages, count])

    const next = useCallback(() => {
        if (currentPage <= pagesCount - pagesInBlock) {
            getUsers(currentBlockPages + pagesInBlock + 1, count)
        }
    }, [currentPage, pagesInBlock, pagesCount, getUsers, currentBlockPages, count])

    const startPage = () => {
        getUsers(1, count)
    }
    const endPage = () => {
        getUsers(pagesCount, count)
    }

    return <div className={s.users_page}>
        <div className={s.pages}>
            <div style={{margin: '10px'}} onClick={startPage}>
                {'< first page >'}
            </div>
            <div style={{display: "flex", margin: '10px'}}>

                {props.currentPage > pagesInBlock && <div style={{marginRight: '20px'}} onClick={prev}> {'<=='} </div>}

                {numbersOfPages.slice(currentBlockPages, currentBlockPages + pagesInBlock).map(p => {
                    return <span
                        style={{padding: ' 0 5px 0 5px'}}
                        key={p}
                        onClick={() => getUsers(p, count)}
                        className={currentPage === p ? s.selectedPage : ''}>
                    {p} </span>
                })}
                {currentPage <= pagesCount - pagesInBlock &&
                <div style={{marginLeft: '20px'}} onClick={next}> {'==>'} </div>}
            </div>
            <div style={{margin: '10px'}} onClick={endPage}> {'< last page >'} </div>
        </div>
        <div>
            {loading ?
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Preloader/>
                </div> :
                users.map((u: UserType) => <User
                        key={u.id}
                        user={u}
                        follow={follow}
                        unfollow={unfollow}
                        followingProgress={followingProgress}
                    />
                )}
        </div>
    </div>
}