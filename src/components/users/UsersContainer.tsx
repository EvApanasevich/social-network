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
    requestUsers: (currentPage: number, count: number) => void
}

/////////////////////////////////////////////////////// Container class Api component ////////////////////////////

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        this.props.requestUsers(this.props.currentPage, this.props.count)
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
                        requestUsers={this.props.requestUsers}
                    />
            </>
        )
    }
}

//////////////////////////////////////////////// Container component ////////////////////////////////////

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {     //     using selectors
    return {                                                                  //             |
        users: getUsers(state),                                               //             |
        count: getCount(state),                                               //     <<<-----|
        totalCount: getTotalCount(state),                                     //
        currentPage: getCurrentPage(state),                                   //
        loading: getLoading(state),                                           //
        followingProgress: getFollowingProgress(state)                        //
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, requestUsers})(UsersContainer)