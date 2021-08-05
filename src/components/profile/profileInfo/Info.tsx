import {UserProfileType} from "../../../redux/profilePageReducer";
import React, {FC} from "react";
import s from "./ProfileInfo.module.css";
import {Button} from "../../common/buttons/Button";

type InfoType = {
    userProfile: UserProfileType | null
    isOwner: boolean
    onEditMode: () => void
}

export const Info: FC<InfoType> = (props) => {
    const {userProfile, isOwner, onEditMode} = props

    return (
        <div className={s.info}>
            <div>
                <u>"Full name" :</u>
                {userProfile?.fullName ? userProfile.fullName : 'not indicated'}</div>
            <div>
                <u>"About me" :</u>
                {userProfile?.aboutMe ? userProfile.aboutMe : 'not indicated'}</div>
            <div>
                <u>"Loking for a job" :</u>
                {userProfile?.lookingForAJob ? 'yes' : 'no'}</div>
            <div>
                <u>"My professional skills" :</u>
                {userProfile?.lookingForAJobDescription ? userProfile.lookingForAJobDescription : 'not indicated'}
            </div>
            {isOwner && <div><Button onClickHandler={onEditMode} buttonName={'Edit information'}/></div>}
            <div>
                <u>Contacts : </u>
                {userProfile && Object.keys(userProfile.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={userProfile.contacts[key]}/>
                })}
            </div>
        </div>
    )
}

type ContactsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsType> = React.memo((props) => {
    const {
        contactTitle,
        contactValue,
    } = props

    return (
        <div style={{'paddingLeft': '20px'}}>
            <span>"{contactTitle}" :</span>
            {contactValue ? contactValue : 'not indicated'}
        </div>
    )
})
