import React from "react";
import ava from '../../../../assets/images/notAva.png'
import s from "./Post.module.css"

type PropsType = {
    message: string
    likes: number
    profilePhoto?: string | null
}

export const Post: React.FC<PropsType> = (props) => {
    const {
        message,
        likes,
        profilePhoto
    } = props

    return (
        <div className={s.post_item}>
            <img alt={''} src={profilePhoto ? profilePhoto : ava}/>
            <div className={s.post}>
                {message}
            </div>
            <div className={s.like}>
                likes: {likes}
            </div>
        </div>
    )
}