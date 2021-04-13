import React, {MouseEvent, useState} from "react";
import s from './Buttons.module.css'

type ButtonPropsType = {
    onClickHandler?: () => void
    buttonName?: string
}

export const ButtonOn: React.FC<ButtonPropsType> = (props) => {
    const {onClickHandler, buttonName} = props

    const [style, setStyle] = useState<boolean>(false)
    const setClass = (event: MouseEvent<HTMLButtonElement>) => {
        setStyle(true)
    }
    const delClass = (event: MouseEvent<HTMLButtonElement>) => {
        setStyle(false)
    }

    return (
            <button onMouseEnter={setClass}
                    onMouseLeave={delClass}
                    className={style ? s.active : s.button}
                    onClick={onClickHandler}>{buttonName}
            </button>
    )
}