import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {
    addPost,
    getProfile,
    getStatus, photoUpload,
    PostType, saveProfileInfo,
    updateStatus,
    UserProfileType, toggleEditForm
} from "../../redux/profilePageReducer";
import s from "./Profile.module.css";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./my-posts/MyPosts";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";
import {InfoFormType} from "./profileInfo/ProfileInfoForm";

type MapStatePropsType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    loading: boolean
    isAuth: boolean
    myId: number | null
    status: string | ''
    profilePhoto?: string | null
    editForm: boolean
}
type MapDispatchPropsType = {
    addPost: (newMessagePost: string) => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    photoUpload: (Photofile: any) => void
    saveProfileInfo: (formData: InfoFormType) => void
    toggleEditForm: (edit: boolean) => void
}
type PathParamsType = {
    userId: string | undefined
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    changeProfile() {
        let userId = Number(this.props.match.params.userId)     //<==== get the id from the browser line using (withRouter)
        if (!userId) {
           userId = this.props.myId as number
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount(): void {
        this.changeProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.changeProfile()
        }
    }

    render() {
        return (
            <div className={s.content}>
                <ProfileInfo
                    userProfile={this.props.userProfile}
                    loading={this.props.loading}
                    isOwner={!this.props.match.params.userId}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    photoUpload={this.props.photoUpload}
                    saveProfileInfo={this.props.saveProfileInfo}
                    editForm={this.props.editForm}
                    toggleEditForm={this.props.toggleEditForm}
                />
                <MyPosts
                    posts={this.props.posts}
                    addPost={this.props.addPost}
                    profilePhoto={this.props.profilePhoto}
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
        profilePhoto: state.profilePage.userProfile?.photos?.large,
        editForm: state.profilePage.editForm
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, getProfile, getStatus, updateStatus, photoUpload, saveProfileInfo, toggleEditForm}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

