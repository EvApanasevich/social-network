import s from './User.module.css'
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {ButtonOn} from "../common/buttons/ButtonOn";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: React.FC<PropsType> = (props) => {
    const {
        user,
        follow,
        unfollow
    } = props

    const startFollowing = () => {
        follow(user.id)
    }
    const stopFollowing = () => {
        unfollow(user.id)
    }

    return (
        <div className={s.user}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small}/>
                </NavLink>
            </div>
            <div>
                <ButtonOn
                    onClickHandler={user.followed ? stopFollowing : startFollowing}
                    buttonName={user.followed ? 'unfollow' : 'follow'}/>
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {user.status}
            </div>
        </div>
    )
}