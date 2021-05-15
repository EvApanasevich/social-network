import React from 'react'
import {UsersPropsType} from "./UsersContainer";
import {User} from "../User/User";

export const Users = (props: UsersPropsType) => {
    const {
        usersPage,
        follow,
        unfollow,
        setUsers
    } = props

    const startFollowing = (userId: string) => {
        follow(userId)
    }
    const stopFollowing = (userId: string) => {
        unfollow(userId)
    }
    const usersList = usersPage.users.map(u => <User
            key={u.id}
            user={u}
            startFollowing={startFollowing}
            stopFollowing={stopFollowing}
        />
    )

    return (
        <div>
            {usersList}
        </div>
    )
}