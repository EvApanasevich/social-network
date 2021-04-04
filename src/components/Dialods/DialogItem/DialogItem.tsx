import mod from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../../images/Avaimg.jpg'

type DialogItemProps = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemProps) => {

    const path = '/dialogs/' + props.id

    return (
        <div className={mod.dialog}>
            <img src={ava}/>
            <NavLink to={path} activeClassName={mod.active}>
                {props.name}
            </NavLink>
        </div>
    )
}



