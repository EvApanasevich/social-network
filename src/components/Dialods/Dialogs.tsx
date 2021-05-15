import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {AddTextareaForm} from "../../textarea-forms/AddTextareaForm";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {
        addMessage,
        changeMessage,
        dialogPage
    } = props

    const dialogsItem = dialogPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    const messageElement = dialogPage.messages.map((m) => <Message message={m.message} id={m.id}/>)

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
                                     text={dialogPage.newMessage} buttonName={'Send message'}/>
                </div>
            </div>
        </div>
    )
}