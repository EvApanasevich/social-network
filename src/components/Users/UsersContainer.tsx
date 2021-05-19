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
import {Preloader} from "../common/preloader/Preloader";
import {usersApi} from "../../api/api";

type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: Array<UserType>
    count: number,
    totalCount: number,
    currentPage: number,
    loading: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
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
        usersApi.getUsers(this.props.currentPage, this.props.count)
            .then(data => {
                this.props.toggleLoading(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }
    pageChange = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleLoading(true)
        usersApi.getUsers(currentPage, this.props.count)
            .then(data => {
                this.props.toggleLoading(false)
                this.props.setUsers(data.items)
            })
    }
    follow = (userId: number) => {
        usersApi.follow(userId)
            .then(resultCode => {
                if (resultCode === 0) {
                    this.props.follow(userId)
                }
            })
    }
    unfollow = (userId: number) => {
        usersApi.unfollow(userId)
            .then(resultCode => {
                if (resultCode === 0) {
                    this.props.unfollow(userId)
                }
            })
    }

    render() {
        return (<>
                {this.props.loading ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    count={this.props.count}
                    currentPage={this.props.currentPage}
                    loading={this.props.loading}
                    follow={this.follow}
                    unfollow={this.unfollow}
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

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleLoading})(UsersApiContainer)