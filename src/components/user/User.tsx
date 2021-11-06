import s from './User.module.css'
import React from "react";
import notAva from "../../assets/images/notAva.png";
import {UserType} from "../../redux/usersReducer";
import {Button} from "../common/buttons/Button";
import {NavLink} from "react-router-dom";
import {DisabledButton} from "../common/buttons/ButtonDisabled";
import {useDispatch} from 'react-redux';
import {createNewDialog, setDialogIsOpen} from "../../redux/dialogPageReducer"

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingProgress: Array<number>
}

export const User: React.FC<PropsType> = (props) => {
    const {user, follow, unfollow, followingProgress} = props

    const dispatch = useDispatch()

    const startFollowing = () => {
        follow(user.id)
    }
    const stopFollowing = () => {
        unfollow(user.id)
    }
    const startDialog = () => {
        dispatch(setDialogIsOpen(true))
        dispatch(createNewDialog(user.id))
    }

    return (
        <div className={s.user}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img alt={''} src={user.photos.small ? user.photos.small : notAva}/>
                </NavLink>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    {user.name}
                </div>
                <div className={s.status} >
                    {user.status}
                </div>
            </div>
            <div className={s.buttons}>
                {followingProgress.some(id => id === user.id) ?
                    <DisabledButton
                        buttonName={user.followed ? 'unfollow' : 'follow'}
                    /> :
                    <Button
                        onClickHandler={user.followed ? stopFollowing : startFollowing}
                        buttonName={user.followed ? 'unfollow' : 'follow'}
                    />
                }
                <NavLink to={'/dialogs'}>
                    <Button onClickHandler={startDialog} buttonName={'send message'}/>
                </NavLink>
            </div>
        </div>
    )
}