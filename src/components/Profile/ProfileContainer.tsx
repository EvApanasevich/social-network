import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {addPost, changePost, getProfile, PostType, UserProfileType} from "../../redux/profilePageReducer";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {RouteComponentProps, withRouter } from "react-router-dom";

type MapStatePropsType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    newPost: string
    loading: boolean
}
type MapDispatchPropsType = {
    addPost: () => void
    changePost: (postText: string) => void
    getProfile: (userId: string | undefined) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

////////////////////////////////////////////// Profile API container /////////////////////////////

export class ProfileApiContainer extends React.Component<PropsType> {

    componentDidMount(): void {

        const userId = this.props.match.params.userId    //<==== get the id from the browser line using (withRouter)

        this.props.getProfile(userId)
    }

    render() {
        return (
            <div className={s.content}>
                <ProfileInfo
                    userProfile={this.props.userProfile}
                    loading={this.props.loading}
                />
                <MyPosts
                    posts={this.props.posts}
                    newPost={this.props.newPost}
                    addPost={this.props.addPost}
                    changePost={this.props.changePost}
                />
            </div>
        )
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        userProfile: state.profilePage.userProfile,
        newPost: state.profilePage.newPost,
        loading: state.usersPage.loading
    }
}

let WithUrlDataProfileApiContainer = withRouter(ProfileApiContainer)

export const ProfileContainer = connect(mapStateToProps, {addPost, changePost, getProfile}) (WithUrlDataProfileApiContainer)