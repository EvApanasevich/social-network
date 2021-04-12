import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, changePostAC, PostType} from '../../../redux/Store'
import {ButtonOn} from "../../../buttons/ButtonOn";

type PropsType = {
    posts: Array<PostType>
    newPost: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<PropsType> = (props) => {
    const {posts, newPost, dispatch} = props

    const postsElement = posts.map((p) => <Post message={p.message} likes={p.likes}/>)

    const changePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const postText = e.currentTarget.value
        dispatch(changePostAC(postText))
    }
    const addPost = () => dispatch(addPostAC())

    return (
        <div>
            <h3 className={s.heading}>My posts</h3>
            <div className={s.add_post}>
                <div>
                    <textarea onChange={changePost} value={newPost}></textarea>
                </div>
                <div>
                    <ButtonOn onClickHandler={addPost} buttonName={'Add post'}/>
                </div>
            </div>
            <div className={s.post}>

                {postsElement}

            </div>
        </div>
    )
}