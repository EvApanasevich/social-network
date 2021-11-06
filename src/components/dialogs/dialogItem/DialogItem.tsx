import React from "react";
import s from './DialogItem.module.css'
import ava from '../../../assets/images/notAva.png'
import {DialogType, setActiveDialog, getMessages} from '../../../redux/dialogPageReducer';
import {useDispatch} from 'react-redux';

type PropsType = {
    dialog: DialogType
    active: boolean
    startChatting: (dialogId: number) => void
}

export const DialogItem: React.FC<PropsType> = (props) => {
    const {dialog, active, startChatting} = props

    return (
        <div onClick={() => startChatting(dialog.id)} className={active ? s.active : s.dialog}>
            <div>
                <img className={s.img} alt={'should be here'} src={dialog.photos.small ? dialog.photos.small : ava}/>
            </div>
            <div>
                {dialog.userName}
            </div>
        </div>
    )
}



