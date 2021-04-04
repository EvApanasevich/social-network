import mod from './Message.module.css'

type MessageProps = {
    message: string
}

export const Message = (props: MessageProps) => {
    return <div className={mod.message}>{props.message}</div>
}

