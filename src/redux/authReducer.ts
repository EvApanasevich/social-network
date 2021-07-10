import {authApi} from "../api/api";
import {AppThunkType} from "./Redux-store";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SOCIAL-NETWORK/AUTH/SET_AUTH_DATA'

export type AuthActionType = SetAuthActionType
type SetAuthActionType = ReturnType<typeof setAuthData>

export type AuthType = {
    id: string | undefined,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: AuthType = {
    id: undefined,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

//////////////////////////////////////////////////// action creators ///////////////////////////////

export const setAuthData = (id: string | undefined, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_AUTH_DATA, payload: {id, email, login}, isAuth: isAuth} as const
}

//////////////////////////////////////////////////// THUNK //////////////////////////////////////////

export const getAuthMe = (): AppThunkType => async dispatch => {

    const res = await authApi.authMe()
    if (res.data.resultCode === 0) {
        const {id, email, login} = res.data.data
        dispatch(setAuthData(id, email, login, true))
    }
    return res
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {

    const res = await authApi.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthMe())
    } else {
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error!'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = (): AppThunkType => async dispatch => {

    const res = await authApi.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthData(undefined, null, null, false))
    }
}
