import React from "react";
import s from './Buttons.module.css'

type ButtonPropsType = {
    buttonName?: string
}

export const DisabledButton: React.FC<ButtonPropsType> = (props) => {
    const {
        buttonName
    } = props

    return (
        <div>
            <button className={s.button} disabled={true}> {buttonName} </button>
        </div>
    )
}