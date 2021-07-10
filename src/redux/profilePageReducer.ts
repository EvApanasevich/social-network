import {v1} from "uuid";
import {profileApi} from "../api/api";
import {toggleLoading} from "./usersReducer";
import {AppThunkType} from "./Redux-store";

const ADD_NEW_POST = 'SOCIAL-NETWORK/PROFILE/ADD-NEW-POST'
const SET_USER_PROFILE = 'SOCIAL-NETWORK/PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'SOCIAL-NETWORK/PROFILE/SET_STATUS'

export type ProfileActionsType =
    | AddPostActionType
    | SetUserProfileActionType
    | GetStatusActionType

type AddPostActionType = ReturnType<typeof addPost>                     // лучше типизировать так
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
type GetStatusActionType = ReturnType<typeof setStatus>

export type ProfilePageType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    status: string | ''
}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, my friends!', likes: 10},
        {id: v1(), message: 'yo, yo', likes: 5},
        {id: v1(), message: 'ya-hu-how!', likes: 7}
    ],
    userProfile: null,
    status: ''
}

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
                status: action.status
            }
        default:
            return state
    }
}

///////////////////////////////////////////////// action creators //////////////////////////////

export const addPost = (newMessagePost: string) => {
    return {type: ADD_NEW_POST, newMessagePost: newMessagePost} as const
}
export const setUserProfile = (userProfile: UserProfileType) => {
    return {type: SET_USER_PROFILE, userProfile: userProfile} as const
}
export const setStatus = (status: string) => {
    return {type: SET_STATUS, status: status} as const
}

//////////////////////////////////////////////////// THUNK //////////////////////////////////////

export const getProfile = (userId: number): AppThunkType => async dispatch => {
        dispatch(toggleLoading(true))
       const res = await profileApi.getProfile(userId)

                dispatch(toggleLoading(false))
                dispatch(setUserProfile(res.data))
}

export const getStatus = (userId: string | undefined): AppThunkType => async dispatch => {
        dispatch(toggleLoading(true))
      const res =  await profileApi.getStatus(userId)

                dispatch(toggleLoading(false))
                dispatch(setStatus(res.data))
}

export const updateStatus = (status: string): AppThunkType => async dispatch => {
       const res = await profileApi.updateStatus(status)

                if(res.data.resultCode === 0)
                dispatch(setStatus(status))
}