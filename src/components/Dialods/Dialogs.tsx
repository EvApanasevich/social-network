import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {changeNewMessage, DialogPageType} from "../../redux/State";
import React, {ChangeEvent} from "react";
import {ButtonOn} from "../../buttons/ButtonOn";

type PropsType = {
    dialogPage: DialogPageType
    addNewMessage: () => void
    changeNewMessage: (messageText: string) => void
}

export const Dialogs = (props: PropsType) => {

    const dialogsItem = props.dialogPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    const messageElement = props.dialogPage.messages.map((m) => <Message message={m.message}/>)

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const messageText = e.currentTarget.value
        props.changeNewMessage(messageText)
    }

    const addMessage = () => props.addNewMessage()

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
                    <div>
                        <textarea onChange={changeMessage} value={props.dialogPage.newMessage}></textarea>
                    </div>
                    <div>
                        <ButtonOn onClickHandler={addMessage}  buttonName={'Send message'} />
                    </div>
                </div>
            </div>
        </div>
    )
}