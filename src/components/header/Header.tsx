import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Button} from "../common/buttons/Button";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <div className={s.login}>
                {props.isAuth ?
                    <div> {props.login} <Button onClickHandler={props.logout} buttonName={'LogOut'}/> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}