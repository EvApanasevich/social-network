import React from "react"
import s from "./Header.module.css"
import {HeaderPropsType} from "./HeadeContainer";
import {NavLink} from "react-router-dom";

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}