import s from './ProfileInfo.module.css';
import React, {ChangeEvent, FC} from "react";
import {UserProfileType} from "../../../redux/profilePageReducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import ava from '../../../assets/images/notAva.png'
import ProfileInfoForm, {InfoFormType} from "./ProfileInfoForm";
import {Info} from "./Info";

type PropsType = {
    userProfile: UserProfileType | null
    loading: boolean
    isOwner: boolean
    status: string | ''
    updateStatus: (status: string) => void
    photoUpload: (PhotoFile: any) => void
    saveProfileInfo: (formData: InfoFormType) => void
    toggleEditForm: (edit: boolean) => void
    editForm: boolean
}

export const ProfileInfo: FC<PropsType> = (props) => {
    const {
        userProfile,
        loading,
        isOwner,
        status,
        updateStatus,
        photoUpload,
        saveProfileInfo,
        editForm,
        toggleEditForm
    } = props

    const photoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && photoUpload(e.target.files[0])
    }
    const onSubmit = (formData: InfoFormType) => {
        saveProfileInfo(formData)
    }

    return (
        <div className={s.profileInfoBlock}>
            <div>
                <div  className={s.photo}>
                    {!loading && userProfile ?
                        <img alt={''} src={userProfile.photos.large ? userProfile.photos.large : ava}/>
                        : <Preloader/>
                    }
                </div>
                <div>
                    {isOwner && <input type={'file'} onChange={photoSelected}/>}
                </div>
                <div className={s.status}>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
            </div>
            {editForm ?
                <ProfileInfoForm userProfile={userProfile} onSubmit={onSubmit}/> :
                <Info userProfile={userProfile} isOwner={isOwner} onEditMode={() => {
                    toggleEditForm(true)
                }}/>}
        </div>
    )
}


