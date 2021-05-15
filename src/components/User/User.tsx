import s from './User.module.css'
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {ButtonOn} from "../../buttons/ButtonOn";

type PropsType = {
    user: UserType
    startFollowing: (userId: string) => void
    stopFollowing: (userId: string) => void
}

export const User: React.FC<PropsType> = (props) => {
    const {
        user,
        startFollowing,
        stopFollowing
    } = props

    const startFollowingHandler = () => {
        startFollowing(user.id)
    }
    const stopFollowingHandler = () => {
        stopFollowing(user.id)
    }

    return (
        <div className={s.user}>
            <div>
                <img src={user.photo}/>
            </div>
            <div>
                <ButtonOn
                    onClickHandler={user.followed ? stopFollowingHandler : startFollowingHandler}
                    buttonName={user.followed ? 'unfollow' : 'follow'}/>
            </div>
            <div>
                {user.fullName}
            </div>
            <div>
                {user.status}
            </div>
            <span>
            <div>
                {user.location.country}
            </div>
            <div>
                {user.location.sity}
            </div>
                </span>
        </div>
    )
}