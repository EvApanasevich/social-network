import React from 'react'
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {User} from "../User/User";

type PropsType = {
    users: Array<UserType>
    totalCount: number
    count: number
    currentPage: number
    loading: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    pageChange: (currentPage: number) => void
}

export const Users = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalCount / props.count)
    const numbersOfPages = []

    for (let i = 1; i <= pagesCount; i++) {
        numbersOfPages.push(i)
    }

    return <div className={s.users_page}>
        <div>
            {numbersOfPages.map(p => {
                return <span key={p}
                             onClick={() => props.pageChange(p)}
                             className={props.currentPage === p ? s.selectedPage : ''}>{p}
                        </span>
            })}
        </div>
        <div>
            { !props.loading ? props.users.map((u: UserType) => <User
                    key={u.id}
                    user={u}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            ) : null}
        </div>
    </div>
}