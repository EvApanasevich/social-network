import s from "./MyPosts.module.css";
import React, {ChangeEvent, FC} from "react";
import {Post} from "./Post/Post";
import {PostType} from '../../../redux/State'
import {ButtonOn} from "../../../buttons/ButtonOn";

type PropsType = {
    posts: Array<PostType>
    newText: string
    changeNewText: (text: string) => void
    addNewPost: () => void
}

export const MyPosts: FC<PropsType> = (props) => {

    const postsElement = props.posts.map((p) => <Post message={p.message} likes={p.likes}/>)

    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.changeNewText(text)
    }
    const addPost = () => {props.addNewPost()}

    return (
        <div>
            <h3 className={s.heading}>My posts</h3>
            <div className={s.add_post}>
                <div>
                    <textarea onChange={changeText} value={props.newText}></textarea>
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