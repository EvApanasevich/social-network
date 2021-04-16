import React from "react";
import {changeShowFriendsAC} from "../../redux/sidebarReducer";
import {StoreType} from "../../App";
import {Navbar} from "./Navbar";

type PropsType = {
    store: StoreType
}

export const NavbarContainer: React.FC<PropsType> = (props) => {
    const {store} = props
    const sidebar = store.getState().sidebar

    const show = () => {
        store.dispatch(changeShowFriendsAC())
    }

    return (
        <Navbar show={show} sidebar={sidebar}/>
     )
}