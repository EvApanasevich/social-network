import React from 'react'
import s from './Message.module.css'

type PropsType = {
    message: string
}

export const Message: React.FC<PropsType> = (props) => {
    const {message} = props

    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

