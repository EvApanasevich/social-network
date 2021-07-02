import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import React from "react";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../common/buttons/Button";
import {maxLength10, required} from "../../utils/validators/validators";
import {Textarea} from "../common/form-elements/FormElements";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {sendMessage, dialogPage,} = props

    const dialogsItem = dialogPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messageElement = dialogPage.messages.map((m) => <Message key={m.id} message={m.message}/>)

    const sendNewMessage = (formData: FormMessageDataType) => {
        sendMessage(formData.newMessage)
    }

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
                    <AddMessageReduxForm onSubmit={sendNewMessage} />
                </div>
            </div>
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
                       validate={[required, maxLength10]}
                />
                <Button buttonName={'add message'}/>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormMessageDataType>({
    form: 'dialogMessageForm'  // уникальное имя для формы
})(AddMessageForm)