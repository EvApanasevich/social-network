import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../App";

type PropsType = {
    store: StoreType
}

export const Profile:React.FC<PropsType> = (props) => {
    const {store} = props

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    )
}