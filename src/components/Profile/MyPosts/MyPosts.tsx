import s from "./MyPosts.module.css";
import React, {ChangeEvent, FC} from "react";
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, changePostAC, PostType} from '../../../redux/Store'
import {ButtonOn} from "../../../buttons/ButtonOn";

type PropsType = {
    posts: Array<PostType>
    newPost: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts: FC<PropsType> = (props) => {

    const postsElement = props.posts.map((p) => <Post message={p.message} likes={p.likes}/>)

    const changePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const postText = e.currentTarget.value
        props.dispatch(changePostAC(postText))
    }
    const addPost = () => props.dispatch(addPostAC())

    return (
        <div>
            <h3 className={s.heading}>My posts</h3>
            <div className={s.add_post}>
                <div>
                    <textarea onChange={changePost} value={props.newPost}></textarea>
                </div>
                <div>
                    <ButtonOn onClickHandler={addPost} buttonName={'Add post'} />
                </div>
            </div>
            <div className={s.post}>

                {postsElement}

            </div>
        </div>
    )
}