import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {AddTextareaForm} from "../../../textarea-forms/AddTextareaForm";
import { ProfilePageType } from "../../../redux/profilePageReducer";

type PropsType = {
    changePost: (inputText: string) => void
    addPost: () => void
    profilePage: ProfilePageType
}

export const MyPosts: React.FC<PropsType> = (props) => {
    const {changePost, addPost, profilePage} = props

    const postsElement = profilePage.posts.map((p) => <Post message={p.message} likes={p.likes}/>)

    return (
        <div>
            <h3 className={s.heading}>My posts</h3>
            <div className={s.add_post}>
                <AddTextareaForm onChangeHandler={changePost} onClickHandler={addPost}
                                 text={profilePage.newPost} buttonName={'Add post'} />
            </div>
            <div className={s.post}>
                {postsElement}
            </div>
        </div>
    )
}