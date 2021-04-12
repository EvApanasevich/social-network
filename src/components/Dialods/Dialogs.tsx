import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, addMessageAC, changeMessageAC, DialogPageType} from "../../redux/Store";
import React, {ChangeEvent} from "react";
import {ButtonOn} from "../../buttons/ButtonOn";

type PropsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {
    const {dialogPage, dispatch} = props

    const dialogsItem = dialogPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    const messageElement = dialogPage.messages.map((m) => <Message message={m.message} id={m.id}/>)

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const messageText = e.currentTarget.value
        dispatch(changeMessageAC(messageText))
    }

    const addMessage = () => dispatch(addMessageAC())

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
                        <textarea onChange={changeMessage} value={dialogPage.newMessage}></textarea>
                    </div>
                    <div>
                        <ButtonOn onClickHandler={addMessage}  buttonName={'Send message'} />
                    </div>
                </div>
            </div>
        </div>
    )
}