import React, {MouseEvent, useState} from "react";
import s from './Buttons.module.css'

type ButtonPropsType = {
    onClickHandler?: () => void
    buttonName?: string
    style?: {}
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const {
        onClickHandler,
        buttonName,
        style,
    } = props

    const [st, setStyle] = useState<boolean>(false)
    const setClass = (event: MouseEvent<HTMLButtonElement>) => {
        setStyle(true)
    }
    const delClass = (event: MouseEvent<HTMLButtonElement>) => {
        setStyle(false)
    }

    return (
        <div>
            <button
                onMouseEnter={setClass}
                onMouseLeave={delClass}
                className={st ? s.active : s.button}
                onClick={onClickHandler}
                style={style}
            >
                {buttonName}
            </button>
        </div>
    )
}