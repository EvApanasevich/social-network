import React from "react";
import ava from "../../../../images/Avaimg.jpg"
import s from "./Post.module.css"

type PostProps = {
    message: string
    likes: number
}

export const Post = (props: PostProps) => {
    return (
        <div className={s.post_item}>
            <img src={ava}/>
            <span className={s.post}>
                {props.message}
            </span>
            <span className={s.like}>
                likes: {props.likes}
            </span>
        </div>
    )
}