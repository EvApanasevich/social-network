import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../redux/State'

type PropsType = {
    profilePage: ProfilePageType
    changeNewText: (text: string) => void
    addNewPost: () => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newText={props.profilePage.newText}
                     changeNewText={props.changeNewText}
                     addNewPost={props.addNewPost}/>

        </div>
    )
}