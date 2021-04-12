import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from '../../redux/Store'

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPost={props.profilePage.newPost}
                     dispatch={props.dispatch}/>

        </div>
    )
}