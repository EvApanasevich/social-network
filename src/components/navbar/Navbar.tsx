import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {Button} from "../common/buttons/Button";
import {NavbarPropsType} from "./NavbarContainer";

export const Navbar: React.FC<NavbarPropsType> = (props) => {
    const {
        changeShowFriends,
        sidebar
    } = props

    const friends = sidebar.friends.map((u) => <div key={u.id}>friend</div>/*<user key={u.id} id={u.id} name={u.name}/>*/)

    return (
        <nav className={s.navbar}>
            <div className={s.navbarItems}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
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
                {sidebar.showFriends ? <Button onClickHandler={changeShowFriends} buttonName={'hide friends'}/> :
                    <Button onClickHandler={changeShowFriends} buttonName={'show friends'}/>}
            </div>
        </nav>
    )
}