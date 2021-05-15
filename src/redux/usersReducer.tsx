import {v1} from "uuid";

const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'

type UsersActionsType = UnfollowActionType | FollowActionType | SetUsersActionType

type UnfollowActionType = {
    type: 'UNFOLLOW',
    userId: string
}
type FollowActionType = {
    type: 'FOLLOW',
    userId: string
}
type SetUsersActionType = {
    type: 'SET_USERS',
    users: Array<UserType>
}

export type UsersPageType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    photo: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type LocationType = {
    sity: string
    country: string
}

const initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            photo: 'https://hornews.com/upload/images/blank-avatar.jpg',
            followed: true,
            fullName: 'Evgen',
            status: 'I am junior!',
            location: {sity: 'Vileyka', country: 'Belarus'}
        }
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if ( u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if ( u.id === action.userId) {
                        return {...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string): FollowActionType => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowAC = (userId: string): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users: users
    }
}