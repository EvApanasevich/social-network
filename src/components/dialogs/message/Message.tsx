import React from 'react'
import s from './Message.module.css'
import { MessageType } from "../../../redux/dialogPageReducer"

type PropsType = {
   message: MessageType
   photo?: string | undefined
   myId: number | null
   myPhoto: string | undefined
   removeMessage: (messageId: string) => void
}

export const Message: React.FC<PropsType> = (props) => {
   const { message, photo, myPhoto, myId, removeMessage } = props

   const myMessage = myId === message.senderId

   return (
      <div className={s.message_item}>
         <img src={myMessage ? myPhoto : photo} />
         <div className={myMessage ? `${s.corner} ${s.is_my}` : s.corner} />
         <div className={myMessage ? `${s.message} ${s.is_my}` : s.message}>
            <div className={s.sender_name}>
               {message.senderName}
            </div>
            <div className={s.message_body}>
               <div className={s.text}>
                  {message.body}
               </div>
               <div className={s.time}>
                  12:00
               </div>
            </div>
         </div>
         <div onClick={() => removeMessage(message.id)} className={s.x}>
            X
         </div>
      </div>
   )
}

