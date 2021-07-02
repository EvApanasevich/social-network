import s from './User.module.css'
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {Button} from "../common/buttons/Button";
import {NavLink} from "react-router-dom";
import {DisabledButton} from "../common/buttons/ButtonDisabled";

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingProgress: Array<number>
}

export const User: React.FC<PropsType> = (props) => {
    const {
        user,
        follow,
        unfollow,
        followingProgress
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
                    <img alt={''} src={user.photos.small}/>
                </NavLink>
            </div>
            <div>
                {followingProgress.some(id => id === user.id) ?
                    <DisabledButton
                        buttonName={user.followed ? 'unfollow' : 'follow'}
                    /> :
                    <Button
                        onClickHandler={user.followed ? stopFollowing : startFollowing}
                        buttonName={user.followed ? 'unfollow' : 'follow'}
                    />
                }
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