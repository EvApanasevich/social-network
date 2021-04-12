import ava from '../../images/Avaimg.jpg'
import s from './User.module.css'

type PropsType = {
    id: number
    name: string
}

export const User: React.FC<PropsType> = (props) => {
    const {id, name} = props

    return (
        <div className={s.user}>
            <div>
                <img src={ava} />
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}