import {FriendsType} from "../../redux/State";
import ava from '../../images/Avaimg.jpg'
import mod from './User.module.css'

export const User = (props: FriendsType) => {
    return (
        <div className={mod.user}>

            <div>
                <img src={ava} />
            </div>

            <div>
                {props.name}
            </div>


        </div>
    )
}