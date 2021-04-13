import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, DialogPageType} from "../../redux/Store";
import React from "react";
import {AddTextareaForm} from "../../textarea-forms/AddTextareaForm";
import {addMessageAC, changeMessageAC} from "../../redux/dialogPageReducer";

type PropsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {
    const {dialogPage, dispatch} = props

    const dialogsItem = dialogPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    const messageElement = dialogPage.messages.map((m) => <Message message={m.message} id={m.id}/>)

    const changeMessage = (inputText: string) => dispatch(changeMessageAC(inputText))
    const addMessage = () => dispatch(addMessageAC())
    const text = dialogPage.newMessage

    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    {dialogsItem}
                </div>
            </div>
            <div className={s.message_block}>
                <div className={s.messages}>
                    {messageElement}
                </div>
                <div className={s.input_message}>
                    <AddTextareaForm onChangeHandler={changeMessage} onClickHandler={addMessage}
                                     text={text} buttonName={'Send message'}/>
                </div>
            </div>
        </div>
    )
}