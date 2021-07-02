import {connect} from "react-redux";
import {
    follow, requestUsers,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/Redux-store";
import React from "react";
import {Users} from "./Users";
import {
    getCount,
    getCurrentPage,
    getFollowingProgress,
    getLoading,
    getTotalCount,
    getUsers
} from "../../redux/usersSelectors";

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

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.count)
    }

    render() {
        return (<>
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
        users: getUsers(state),
        count: getCount(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        loading: getLoading(state),
        followingProgress: getFollowingProgress(state)
    }
}

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, getUsers: requestUsers})(UsersApiContainer)