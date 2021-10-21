import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { getAllDialogs, sendMessage, deleteMessage } from "../../redux/dialogPageReducer";
import { Button } from "../common/buttons/Button";
import { Textarea } from "../common/form-elements/FormElements";
import { DialogItem } from "./dialogItem/DialogItem";
import s from './Dialogs.module.css';
import { DialogsPropsType } from "./DialogsContainer";
import { Message } from "./message/Message";
import { AppRootStateType } from "../../redux/Redux-store"
import { getProfile } from "../../redux/profilePageReducer";
import ava from "../../assets/images/Avaimg.png"

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
   const { dialogPage } = props

   useEffect(() => {
      dispatch(getAllDialogs())
      dispatch(getProfile(myId))
   }, [])

   const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false)
   const dispatch = useDispatch()
   const activeDialogId = useSelector<AppRootStateType, number | null>(state => state.dialogPage.activeDialogId)
   const myId = useSelector<AppRootStateType, number | null>(state => state.auth.id)
   const myPhoto = useSelector<AppRootStateType, string | undefined>(state => state.profilePage.userProfile?.photos?.small)

   const send = (formData: FormMessageDataType) => {
      dispatch(sendMessage(formData.newMessage))
   }
   const removeMessage = (messageId: string) => {
      dispatch(deleteMessage(messageId))
   }

   const activeDialog = dialogPage.dialogs.find((dialog) => dialog.id === activeDialogId)
   
   const dialogsItem = dialogPage.dialogs.map((dialog) =>
      <DialogItem key={dialog.id} active={activeDialogId === dialog.id} dialog={dialog} setDialogIsOpen={setDialogIsOpen} />)
   const messageElement = dialogPage.messages.map((message) =>
      <Message key={message.id} message={message} removeMessage={removeMessage} photo={activeDialog?.photos.small} 
      myPhoto={myPhoto ? myPhoto : ava} myId={myId} />)

   return (
      <div className={s.dialogs}>
         <div>
            <div className={s.dialogsItems}>
               {dialogsItem}
            </div>
         </div>
         {dialogIsOpen ? <div className={s.message_block}>
            <div className={s.messages}>
               {messageElement}
            </div>
            <div className={s.input_message}>
               <AddMessageReduxForm onSubmit={send} />
            </div>
         </div>
            : <div>Сhoose an interlocutor and start chatting right now </div>}
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
            <Field placeholder={'enter your message'}
               name={'newMessage'}
               component={Textarea}
               // validate={[maxLength100]}
            />
            <Button buttonName={'add message'} />
         </div>
      </form>
   )
}

export const AddMessageReduxForm = reduxForm<FormMessageDataType>({
   form: 'dialogMessageForm'  // уникальное имя для формы
})(AddMessageForm)