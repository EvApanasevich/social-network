import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {
    addPost,
    getProfile,
    getStatus,
    PostType,
    updateStatus,
    UserProfileType
} from "../../redux/profilePageReducer";
import s from "./Profile.module.css";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./my-posts/MyPosts";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import { compose } from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    loading: boolean
    isAuth: boolean
    myId: number | null
    status: string | ''
}
type MapDispatchPropsType = {
    addPost: (newMessagePost: string) => void
    getProfile: (userId: string | undefined, myId: number | null) => void
    getStatus: (userId: string | undefined, myId: number | null) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        const userId = this.props.match.params.userId    //<==== get the id from the browser line using (withRouter)
        this.props.getProfile(userId, this.props.myId)
        this.props.getStatus(userId, this.props.myId)
    }

    render() {
        return (
            <div className={s.content}>
                <ProfileInfo
                    userProfile={this.props.userProfile}
                    loading={this.props.loading}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
                <MyPosts
                    posts={this.props.posts}
                    addPost={this.props.addPost}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        userProfile: state.profilePage.userProfile,
        loading: state.usersPage.loading,
        isAuth: state.auth.isAuth,
        myId: state.auth.id,
        status: state.profilePage.status,
    }
}

export default compose<React.ComponentType>(                                                // по очереди обворачиваем
    connect(mapStateToProps, {addPost, getProfile, getStatus, updateStatus}),        // контейнерными компонентами
    withRouter,
    withAuthRedirect
) (ProfileContainer)

