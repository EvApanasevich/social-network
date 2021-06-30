import s from './ProfileInfo.module.css';
import React from "react";
import {UserProfileType} from "../../../redux/profilePageReducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import ava from '../../../assets/images/Avaimg.png'

type PropsType = {
    userProfile: UserProfileType | null
    loading: boolean
    status: string | ''
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    return (
        <div className={s.info}>
            <div>
                {!props.loading && props.userProfile ?
                    <img alt={''}
                         style={{width: '300px', height: '300px'}}
                         src={props.userProfile.photos.large ? props.userProfile.photos.large : ava}/> :
                    <Preloader/>
                }
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}