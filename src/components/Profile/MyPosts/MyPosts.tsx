import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {AddTextareaForm} from "../../../textarea-forms/AddTextareaForm";
import {PostType} from "../../../redux/profilePageReducer";

type PropsType = {
    posts: Array<PostType>
    newPost: string
    addPost: () => void
    changePost: (postText: string) => void
}

export const MyPosts: React.FC<PropsType> = (props) => {
    const {
        changePost,
        addPost,
        posts,
        newPost
    } = props

    const postsElement = posts.map((p) => <Post key={p.id} message={p.message} likes={p.likes}/>)

    return (
        <div>
            <h3 className={s.heading}>My posts</h3>
            <div className={s.add_post}>
                <AddTextareaForm onChangeHandler={changePost} onClickHandler={addPost}
                                 text={newPost} buttonName={'Add post'} />
            </div>
            <div className={s.post}>
                {postsElement}
            </div>
        </div>
    )
}