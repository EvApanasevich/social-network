import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {
    getAllDialogs,
    sendMessage,
    deleteMessage,
    setActiveDialog,
    getMessages,
    setDialogIsOpen
} from "../../redux/dialogPageReducer";
import {Button} from "../common/buttons/Button";
import {Textarea} from "../common/form-elements/FormElements";
import {DialogItem} from "./dialogItem/DialogItem";
import s from './Dialogs.module.css';
import {DialogsPropsType} from "./DialogsContainer";
import {Message} from "./message/Message";
import {AppRootStateType} from "../../redux/Redux-store"
import {getProfile} from "../../redux/profilePageReducer";
import ava from "../../assets/images/notAva.png"
import pointer from "../../assets/images/pointer.png"
import {Pagination} from "../common/pagination/Pagination";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {dialogPage} = props

    useEffect(() => {
        dispatch(getAllDialogs())
        dispatch(getProfile(myId))
    }, [])

    const dispatch = useDispatch()
    const activeDialogId = useSelector<AppRootStateType, number | null>(state => state.dialogPage.activeDialogId)
    const dialogIsOpen = useSelector<AppRootStateType, boolean>(state => state.dialogPage.dialogIsOpen)
    const messagesTotalCount = useSelector<AppRootStateType, number>(state => state.dialogPage.messagesTotalCount)
    const messagesCount = useSelector<AppRootStateType, number>(state => state.dialogPage.messagesCount)
    const messagesCurrentPage = useSelector<AppRootStateType, number>(state => state.dialogPage.messagesCurrentPage)
    const myId = useSelector<AppRootStateType, number | null>(state => state.auth.id)
    const myPhoto = useSelector<AppRootStateType, string | undefined>(state => state.profilePage.userProfile?.photos?.small)

    const send = (formData: FormMessageDataType) => {
        dispatch(sendMessage(formData.newMessage))
    }
    const removeMessage = (messageId: string) => {
        dispatch(deleteMessage(messageId))
    }
    const startChatting = (dialogId: number) => {
        dispatch(setDialogIsOpen(true))
        dispatch(setActiveDialog(dialogId))
        dispatch(getMessages(1, messagesCount))
    }
    const requestMessages = (messagesCurrentPage: number, messagesCount: number) => {
        dispatch(getMessages(messagesCurrentPage, messagesCount))
    }

    const activeDialog = dialogPage.dialogs.find((dialog) => dialog.id === activeDialogId)

    const dialogsItem = dialogPage.dialogs.map((dialog) =>
        <DialogItem key={dialog.id} active={activeDialogId === dialog.id} dialog={dialog}
                    startChatting={startChatting}/>)
    const messageElements = dialogPage.messages.map((message) =>
        <Message key={message.id} message={message} removeMessage={removeMessage} photo={activeDialog?.photos.small}
                 myPhoto={myPhoto ? myPhoto : ava} myId={myId}/>)

    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    {dialogsItem}
                </div>
            </div>
            {dialogIsOpen ?
                <div className={s.messages_block}>
                    <Pagination
                        totalCount={messagesTotalCount}
                        count={messagesCount}
                        currentPage={messagesCurrentPage}
                        requestElements={requestMessages}
                        pagesInBlock={5}
                    />
                    <div className={s.messages_elements}>
                        <div className={messageElements.length !== 0 ? s.messages : s.empty}>
                            {messageElements.length !== 0 ?
                                <div>
                                    {messageElements}
                                </div> :
                                <div>No messages yet. Be the first to write!</div>}
                        </div>
                        <div className={s.input_message}>
                            <AddMessageReduxForm onSubmit={send}/>
                        </div>
                    </div>
                </div>
                : <div className={s.text}>
                    <img src={pointer}/>
                    Сhoose an interlocutor and start chatting right now!
                </div>}
        </div>
    )
}

type FormMessageDataType = {
    newMessage: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormMessageDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'enter your message...'}
                       name={'newMessage'}
                       component={Textarea}
                    // validate={[maxLength100]}
                />
                <Button buttonName={'add message'}/>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormMessageDataType>({
    form: 'dialogMessageForm'  // уникальное имя для формы
})(AddMessageForm)