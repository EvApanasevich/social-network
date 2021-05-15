import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {AddTextareaForm} from "../../../textarea-forms/AddTextareaForm";
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {
        changePost,
        addPost,
        profilePage
    } = props

    const postsElement = profilePage.posts.map((p) => <Post key={p.id} message={p.message} likes={p.likes}/>)

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