import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {ActionsType, SidebarType} from "../../redux/Store";
import {User} from "../User/User";
import {ButtonOn} from "../../buttons/ButtonOn";
import {changeShowFriendsAC} from "../../redux/sidebarReducer";


type PropsType = {
    sidebar: SidebarType
    dispatch: (action: ActionsType) => void
}

export const Navbar: React.FC<PropsType> = (props) => {
    const {sidebar, dispatch} = props

    const show = () => {
        dispatch(changeShowFriendsAC())
    }
    const friends = sidebar.friends.map((u) => <User id={u.id} name={u.name}/>)

    return (
        <nav className={s.navbar}>
            <div className={s.navbarItems}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>
            </div>
            <h3>Friends</h3>
            <div className={s.listFriends}>
                <div className={s.friends}>

                    {sidebar.showFriends && friends}

                </div>

                {sidebar.showFriends ? <ButtonOn onClickHandler={show} buttonName={'hide friends'}/> :
                                       <ButtonOn onClickHandler={show} buttonName={'show friends'}/>}
            </div>
        </nav>
    )
}