import {v1} from "uuid";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";
import {toggleLoading} from "./usersReducer";

const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

type ActionsType = AddPostActionType | ChangePostActionType | SetUserProfileActionType | GetStatusActionType

type AddPostActionType = {
    type: 'ADD-NEW-POST',
    newMessagePost: string
}
type ChangePostActionType = {
    type: "CHANGE-NEW-POST",
    postText: string
}
type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    userProfile: UserProfileType
}
type GetStatusActionType = {
    type: 'SET_STATUS',
    status: string
}

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

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
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

export const addPost = (newMessagePost: string): AddPostActionType => {
    return {type: ADD_NEW_POST, newMessagePost: newMessagePost}
}
export const setUserProfile = (userProfile: UserProfileType): SetUserProfileActionType => {
    return {type: SET_USER_PROFILE, userProfile: userProfile}
}
export const setStatus = (status: string): GetStatusActionType => {
    return {type: SET_STATUS, status: status}
}

//////////////////////////////////////////////////// THUNK //////////////////////////////////////

export const getProfile = (userId: string | undefined, myId: number | null) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleLoading(true))
        profileApi.getProfile(userId, myId)
            .then(res => {
                dispatch(toggleLoading(false))
                dispatch(setUserProfile(res.data))
            })
    }
}
export const getStatus = (userId: string | undefined, myId: number | null) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleLoading(true))
        profileApi.getStatus(userId, myId)
            .then(res => {
                dispatch(toggleLoading(false))
                dispatch(setStatus(res.data))
            })
    }
}
export const updateStatus = (status: string) => {

    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status)
            .then(res => {
                if(res.data.resultCode === 0)
                dispatch(setStatus(status))
            })
    }
}