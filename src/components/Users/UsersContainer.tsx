import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleLoading,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/Redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";

type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: Array<UserType>
    count: number,
    totalCount: number,
    currentPage: number,
    loading: boolean
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleLoading: (loading: boolean) => void
}

/////////////////////////////////////////////////////// Container class Api component ////////////////////////////

class UsersApiContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount(): void {
        this.props.toggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
            .then(respons => {
                this.props.toggleLoading(false)
                this.props.setUsers(respons.data.items)
                this.props.setTotalCount(respons.data.totalCount)
            })
    }

    pageChange = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.count}`)
            .then(respons => {
                this.props.toggleLoading(false)
                this.props.setUsers(respons.data.items)
            })
    }

    render() {
        return (<>
                {this.props.loading ? <Preloader /> : null}
                <Users
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    count={this.props.count}
                    currentPage={this.props.currentPage}
                    loading={this.props.loading}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageChange={this.pageChange}/>
                </>
        )
    }
}

//////////////////////////////////////////////// Container component ////////////////////////////////////

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        loading: state.usersPage.loading
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleLoading: (loading: boolean) => {
            dispatch(toggleLoadingAC(loading))
        }
    }
}*/

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleLoading}) (UsersApiContainer)