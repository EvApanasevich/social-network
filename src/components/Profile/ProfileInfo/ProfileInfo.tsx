import s from './ProfileInfo.module.css';
import React from "react";
import {UserProfileType} from "../../../redux/profilePageReducer";
import {Preloader} from "../../common/preloader/Preloader";

type PropsType = {
    userProfile: UserProfileType | null
    loading: boolean
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    return (
        <div className={s.info}>
            <div>
                {!props.loading && props.userProfile ?
                    <img src={props.userProfile.photos.large}
                    /> :
                    <Preloader />
                }
                ava + description
            </div>
        </div>
    )
}