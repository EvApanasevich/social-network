import {changeShowFriendsAC, SidebarType} from "../../redux/sidebarReducer";
import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux"

export type NavbarPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    sidebar: SidebarType
}
type MapDispatchPropsType = {
    show: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        show: () => {
            dispatch(changeShowFriendsAC())
        }
    }
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps) (Navbar)