import {v1} from "uuid";
import {profileApi} from "../api/api";
import {toggleLoading} from "./usersReducer";
import {AppThunkType} from "./Redux-store";
import {InfoFormType} from "../components/profile/profileInfo/ProfileInfoForm";
import {stopSubmit} from "redux-form";

const ADD_NEW_POST = 'SOCIAL-NETWORK/PROFILE/ADD-NEW-POST'
const SET_USER_PROFILE = 'SOCIAL-NETWORK/PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'SOCIAL-NETWORK/PROFILE/SET_STATUS'
const SAVE_PHOTO = 'SOCIAL-NETWORK/PROFILE/SAVE_PHOTO'
const TOGGLE_EDIT_FORM = 'SOCIAL-NETWORK/PROFILE/TOGGLE_EDIT_FORM'

export type ProfileActionsType =
    | AddPostActionType
    | SetUserProfileActionType
    | GetStatusActionType
    | SavePhotoActionType
    | editModeFormType

type AddPostActionType = ReturnType<typeof addPost>                     // лучше типизировать так
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
type GetStatusActionType = ReturnType<typeof setStatus>
type SavePhotoActionType = ReturnType<typeof savePhoto>
type editModeFormType = ReturnType<typeof toggleEditForm>

export type PostType = {
    id: string
    message: string
    likes: number
}
export type UserProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    [key: string]: string
}
type PhotosType = {
    small: string
    large: string
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, my friends!', likes: 10},
        {id: v1(), message: 'yo, yo', likes: 5},
        {id: v1(), message: 'ya-hu-how!', likes: 7}
    ] as Array<PostType>,
    userProfile: null as UserProfileType | null,
    editForm: false,
    status: ''
}

export type ProfilePageType = typeof initialState

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: v1(),
                message: action.newMessagePost,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SAVE_PHOTO:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos} as UserProfileType
            }
        case TOGGLE_EDIT_FORM:
            return {
                ...state,
                editForm: action.edit
            }
        default:
            return state
    }
}

///////////////////////////////////////////////// action creators /////////////////////////////

export const addPost = (newMessagePost: string) => {
    return {type: ADD_NEW_POST, newMessagePost: newMessagePost} as const
}
export const setUserProfile = (userProfile: UserProfileType) => {
    return {type: SET_USER_PROFILE, userProfile: userProfile} as const
}
export const setStatus = (status: string) => {
    return {type: SET_STATUS, status: status} as const
}
export const savePhoto = (photos: PhotosType) => {
    return {type: SAVE_PHOTO, photos: photos} as const
}
export const toggleEditForm = (edit: boolean) => {
    return {type: TOGGLE_EDIT_FORM, edit: edit} as const
}

//////////////////////////////////////////////////// THUNK //////////////////////////////////////

export const getProfile = (userId: number | null): AppThunkType => async dispatch => {
    dispatch(toggleLoading(true))
    const res = await profileApi.getProfile(userId)

    dispatch(toggleLoading(false))
    dispatch(setUserProfile(res.data))
}

export const getStatus = (userId: number | null): AppThunkType => async dispatch => {

    dispatch(toggleLoading(true))
    const res = await profileApi.getStatus(userId)

    dispatch(toggleLoading(false))
    dispatch(setStatus(res.data))

}

export const updateStatus = (status: string): AppThunkType => async dispatch => {
    try {
        const res = await profileApi.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
    }
}

export const photoUpload = (Photofile: any): AppThunkType => async dispatch => {
    const res = await profileApi.updatePhoto(Photofile)

    if (res.data.resultCode === 0)
        dispatch(savePhoto(res.data.data.photos))
}

export const saveProfileInfo = (formData: InfoFormType): AppThunkType => async (dispatch, getState) => {
    const myId = getState().auth.id
    const res = await profileApi.saveProfileInfo(formData)

    if (res.data.resultCode === 0) {
        dispatch(getProfile(myId))
        dispatch(toggleEditForm(false))

    } else {
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error!'
        dispatch(stopSubmit('edit-info', {_error: errorMessage}))
    }
}