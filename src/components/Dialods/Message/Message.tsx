import s from './Message.module.css'

type PropsType = {
    message: string
    id: string
}

export const Message: React.FC<PropsType> = (props) => {
    const {
        message,
        id} = props

    return (
        <div className={s.message}>{message}</div>
    )
}

