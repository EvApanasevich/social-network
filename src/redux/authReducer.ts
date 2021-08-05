import {authApi, securityApi} from "../api/api";
import {AppThunkType} from "./Redux-store";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SOCIAL-NETWORK/AUTH/SET_AUTH_DATA'
const SET_CAPTCHA_URL = 'SOCIAL-NETWORK/AUTH/SET_CAPTCHA_URL'

export type AuthActionType = SetAuthActionType | SetCaptchaUrlType
type SetAuthActionType = ReturnType<typeof setAuthData>
type SetCaptchaUrlType = ReturnType<typeof setCaptchaUrl>

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: AuthType = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

//////////////////////////////////////////////////// action creators ///////////////////////////////

export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_AUTH_DATA, payload: {id, email, login, isAuth: isAuth}} as const
}
export const setCaptchaUrl = (captchaUrl: string | null) => {
    return {type: SET_CAPTCHA_URL, payload: {captchaUrl}} as const
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

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async dispatch => {

    const res = await authApi.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthMe())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error!'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = (): AppThunkType => async dispatch => {

    const res = await authApi.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
        dispatch(setCaptchaUrl(null))
    }
}

export const getCaptcha = (): AppThunkType => async dispatch => {
    const res = await securityApi.getCaptchaUrl()
    dispatch(setCaptchaUrl(res.data.url))
}
