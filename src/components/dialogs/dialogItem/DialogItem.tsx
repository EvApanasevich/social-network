import s from './DialogItem.module.css'
import ava from '../../../assets/images/Avaimg.png'
import { DialogType, setActiveDialog, getMessages } from '../../../redux/dialogPageReducer';
import { useDispatch } from 'react-redux';

type PropsType = {
   dialog: DialogType
   active: boolean
   setDialogIsOpen: (flag: boolean) => void
}

export const DialogItem: React.FC<PropsType> = (props) => {
   const { dialog, active, setDialogIsOpen } = props

   const dispatch = useDispatch()

   const startChatting = () => {
      setDialogIsOpen(true)
      dispatch(setActiveDialog(dialog.id))
      dispatch(getMessages(dialog.id))
   }

   return (
      <div onClick={startChatting} className={active ? s.active : s.dialog}>
         <div>
            <img className={s.img} alt={'should be here'} src={dialog.photos.small ? dialog.photos.small : ava} />
         </div>
         <div>
            {dialog.userName}
         </div>
      </div>
   )
}



