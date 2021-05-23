import {connect} from "react-redux";
import {
    follow, getUsers,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/Redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: Array<UserType>
    count: number,
    totalCount: number,
    currentPage: number,
    loading: boolean,
    followingProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, count: number) => void
}

/////////////////////////////////////////////////////// Container class Api component ////////////////////////////

class UsersApiContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.count)
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
                    followingProgress={this.props.followingProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    getUsers={this.props.getUsers}
                />
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
        loading: state.usersPage.loading,
        followingProgress: state.usersPage.followingProgress
    }
}

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, getUsers}) (UsersApiContainer)