import {usersApi} from "../api/api";
import {AppThunkType} from "./Redux-store";

const UNFOLLOW = 'SOCIAL-NETWORK/USERS/UNFOLLOW'
const FOLLOW = 'SOCIAL-NETWORK/USERS/FOLLOW'
const SET_USERS = 'SOCIAL-NETWORK/USERS/SET_USERS'
const SET_CURRENT_PAGE = 'SOCIAL-NETWORK/USERS/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SOCIAL-NETWORK/USERS/SET_TOTAL_COUNT'
const TOGGLE_LOADING = 'SOCIAL-NETWORK/USERS/TOGGLE_LOADING'
const TOGGLE_FOLLOWING_PROGRESS = 'SOCIAL-NETWORK/USERS/TOGGLE_FOLLOWING_PROGRESS'

export type UsersActionsType =
    | UnfollowActionType
    | FollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType
    | ToggleLoadingActionType
    | ToggleFollowingProgressActionType

type UnfollowActionType = ReturnType<typeof successedUnfollow>
type FollowActionType = ReturnType<typeof successedFollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalCountActionType = ReturnType<typeof setTotalCount>
type ToggleLoadingActionType = ReturnType<typeof toggleLoading>
type ToggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

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
export type PhotosType = {
    small: string
    large: string
}

const initialState: UsersPageType = {
    users: [],
    count: 20,
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

export const successedFollow = (userId: number) => {
    return {type: FOLLOW, userId: userId} as const
}
export const successedUnfollow = (userId: number) => {
    return {type: UNFOLLOW, userId: userId} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users: users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage} as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount} as const
}
export const toggleLoading = (loading: boolean) => {
    return {type: TOGGLE_LOADING, loading: loading} as const
}
export const toggleFollowingProgress = (isLoading: boolean, userId: number) => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, isLoading: isLoading, userId: userId} as const
}

//////////////////////////////////////////// THUNK ////////////////////////////////////////////////////////////////

export const requestUsers = (currentPage: number, count: number): AppThunkType => async dispatch => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleLoading(true))
    const res = await usersApi.getUsers(currentPage, count)
    dispatch(toggleLoading(false))
    dispatch(setUsers(res.data.items))
    dispatch(setTotalCount(res.data.totalCount))
}

export const follow = (userId: number): AppThunkType => async dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await usersApi.follow(userId)
    if (res.data.resultCode === 0) {
        dispatch(successedFollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

    /*followUnfollowFlow(dispatch, userId, usersApi.follow(userId), successedFollow)*/
}

export const unfollow = (userId: number): AppThunkType => async dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await usersApi.unfollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(successedUnfollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

  /*  followUnfollowFlow(dispatch, userId, usersApi.unfollow(userId), successedUnfollow)*/
}

/*
const followUnfollowFlow = async (dispatch: Dispatch<UsersActionsType>,                 //// Helper function
                                  userId: number | null, apiMethod: any,
                                  actionCreator: (userId: number | null) => FollowActionType | UnfollowActionType) => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
*/
