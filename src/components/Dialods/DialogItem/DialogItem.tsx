import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../../images/Avaimg.jpg'

type PropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<PropsType> = (props) => {
    const {
        name,
        id
    } = props

    const path = '/dialogs/' + id

    return (
        <div className={s.dialog}>
            <img src={ava}/>
            <NavLink to={path} activeClassName={s.active}>
                {name}
            </NavLink>
        </div>
    )
}



