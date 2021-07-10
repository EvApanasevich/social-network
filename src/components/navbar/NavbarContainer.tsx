import {changeShowFriends, SidebarType} from "../../redux/sidebarReducer";
import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";

export type NavbarPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    sidebar: SidebarType
}
type MapDispatchPropsType = {
    changeShowFriends: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

export const NavbarContainer = connect(mapStateToProps, {changeShowFriends}) (Navbar)