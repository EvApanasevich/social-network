import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, changePostAC, PostType} from '../../../redux/Store'
import {AddTextareaForm} from "../../../textarea-forms/AddTextareaForm";

type PropsType = {
    posts: Array<PostType>
    newPost: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<PropsType> = (props) => {
    const {posts, newPost, dispatch} = props

    const postsElement = posts.map((p) => <Post message={p.message} likes={p.likes}/>)

    const changePost = (inputText: string) => dispatch(changePostAC(inputText))
    const addPost = () => dispatch(addPostAC())

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