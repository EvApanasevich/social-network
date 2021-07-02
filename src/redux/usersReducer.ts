import {usersApi} from "../api/api";
import {AppThunkType} from "./Redux-store";

const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_LOADING = 'TOGGLE_LOADING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

export type UsersActionsType =
    | UnfollowActionType
    | FollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType
    | ToggleLoadingActionType
    | ToggleFollowingProgressActionType

type UnfollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}
type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}
type SetUsersActionType = {
    type: 'SET_USERS',
    users: Array<UserType>
}
type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type SetTotalCountActionType = {
    type: 'SET_TOTAL_COUNT',
    totalCount: number
}
type ToggleLoadingActionType = {
    type: 'TOGGLE_LOADING'
    loading: boolean
}
type ToggleFollowingProgressActionType = {
    type: 'TOGGLE_FOLLOWING_PROGRESS'
    isLoading: boolean
    userId: number
}

export type UsersPageType = {
    users: Array<UserType>
    count: number
    totalCount: number
    currentPage: number
    loading: boolean
    followingProgress: Array<number>
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    followed: boolean
    status: string
}
type PhotosType = {
    small: string
    large: string
}

const initialState: UsersPageType = {
    users: [],
    count: 50,
    totalCount: 0,
    currentPage: 1,
    loading: false,
    followingProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isLoading
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

////////////////////////////////////////////// action creators ///////////////////////////////

export const successedFollow = (userId: number): FollowActionType => {
    return {type: FOLLOW, userId: userId}
}
export const successedUnfollow = (userId: number): UnfollowActionType => {
    return {type: UNFOLLOW, userId: userId}
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {type: SET_USERS, users: users}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
export const setTotalCount = (totalCount: number): SetTotalCountActionType => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount}
}
export const toggleLoading = (loading: boolean): ToggleLoadingActionType => {
    return {type: TOGGLE_LOADING, loading: loading}
}
export const toggleFollowingProgress = (isLoading: boolean, userId: number): ToggleFollowingProgressActionType => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, isLoading: isLoading, userId: userId}
}

//////////////////////////////////////////// THUNK ////////////////////////////////////////////////////////////////

export const requestUsers = (currentPage: number, count: number): AppThunkType => {

    return (dispatch) => {

        dispatch(setCurrentPage(currentPage))
        dispatch(toggleLoading(true))
        usersApi.getUsers(currentPage, count)
            .then(res => {
                dispatch(toggleLoading(false))
                dispatch(setUsers(res.data.items))
                dispatch(setTotalCount(res.data.totalCount))
            })
    }
}
export const follow = (userId: number): AppThunkType => {

    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId))
        usersApi.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(successedFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number): AppThunkType => {

    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId))
        usersApi.unfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(successedUnfollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
