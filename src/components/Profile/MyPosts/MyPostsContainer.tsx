import React from "react";
import {addPostAC, changePostAC} from '../../../redux/profilePageReducer'
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../App";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<PropsType> = (props) => {
    const {store} = props
    const profilePage = store.getState().profilePage

    const changePost = (inputText: string) => store.dispatch(changePostAC(inputText))
    const addPost = () => store.dispatch(addPostAC())

    return (
        <MyPosts changePost={changePost} addPost={addPost} profilePage={profilePage} />
    )
}