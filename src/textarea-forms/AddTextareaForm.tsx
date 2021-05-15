import React, {ChangeEvent} from "react";
import {ButtonOn} from "../buttons/ButtonOn";

type PropsType = {
    onChangeHandler: (inputText: string) => void
    onClickHandler: () => void
    text: string
    buttonName: string
}

export const AddTextareaForm: React.FC<PropsType> = (props) => {
    const {
        onChangeHandler,
        text,
        onClickHandler,
        buttonName
    } = props

    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.currentTarget.value
        onChangeHandler(inputText)
    }

    return (
        <div>
            <textarea onChange={changeText} value={text}>Enter text</textarea>
            <ButtonOn onClickHandler={onClickHandler} buttonName={buttonName}/>
        </div>
    )
}