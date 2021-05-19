import React from "react";
import ava from "../../../../assets/images/Avaimg.jpg"
import s from "./Post.module.css"

type PropsType = {
    message: string
    likes: number
}

export const Post: React.FC<PropsType> = (props) => {
    const {message, likes} = props

    return (
        <div className={s.post_item}>
            <img src={ava}/>
            <span className={s.post}>
                {message}
            </span>
            <span className={s.like}>
                likes: {likes}
            </span>
        </div>
    )
}