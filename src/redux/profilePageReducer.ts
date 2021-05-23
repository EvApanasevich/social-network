import {v1} from "uuid";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";
import {toggleLoading} from "./usersReducer";

const ADD_NEW_POST = 'ADD-NEW-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type ActionsType = AddPostActionType | ChangePostActionType | SetUserProfileActionType

type AddPostActionType = {
    type: 'ADD-NEW-POST'
}
type ChangePostActionType = {
    type: "CHANGE-NEW-POST",
    postText: string
}
type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    userProfile: UserProfileType
}

export type ProfilePageType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    newPost: string
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
    newPost: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: v1(),
                message: state.newPost,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPost: ''
            }
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPost: action.postText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        default:
            return state
    }
}

export const addPost = (): AddPostActionType => {
    return {
        type: ADD_NEW_POST
    }
}
export const changePost = (postText: string): ChangePostActionType => {
    return {
        type: CHANGE_NEW_POST,
        postText: postText
    }
}
export const setUserProfile = (userProfile: UserProfileType): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        userProfile: userProfile
    }
}

export const getProfile = (userId: string | undefined) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleLoading(true))
        profileApi.getProfile (userId)
            .then(data => {
                dispatch(toggleLoading(false))
                dispatch(setUserProfile(data))
            })
    }
}