import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../../assets/images/Avaimg.png'

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
            <img alt={'should be here'} src={ava}/>
            <NavLink to={path} activeClassName={s.active}>
                {name}
            </NavLink>
        </div>
    )
}



