import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";

export type UsersPropsType = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
    usersPage: UsersPageType
}
type MapDispatchToProps = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)