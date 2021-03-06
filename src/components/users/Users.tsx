import React from 'react'
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import {User} from "../user/User";
import {Preloader} from "../common/preloader/Preloader";
import {Pagination} from "../common/pagination/Pagination";

type PropsType = {
    users: Array<UserType>
    totalCount: number
    count: number
    currentPage: number
    loading: boolean
    followingProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (currentPage: number, current: number) => void
}

export const Users = (props: PropsType) => {
    const {
        users,
        totalCount,
        count,
        currentPage,
        loading,
        followingProgress,
        follow,
        unfollow,
        requestUsers
    } = props


    return (
        <div className={s.usersBlock}>
            <Pagination
                totalCount={totalCount}
                count={count}
                currentPage={currentPage}
                pagesInBlock={10}
                requestElements={requestUsers}
            />
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
            {!loading && <Pagination
                totalCount={totalCount}
                count={count}
                currentPage={currentPage}
                pagesInBlock={10}
                requestElements={requestUsers}
            />}
        </div>
    )
}