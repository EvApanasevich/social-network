import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'

type AuthActionType = SetAuthActionType

type SetAuthActionType = {
    type: 'SET_AUTH_DATA',
    data: { id: number, email: string, login: string, }
}
export type AuthType = {
    id: number | null
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

//////////////////////////////////////////////////// action creators ///////////////////////////////

export const setAuthData = (id: number, email: string, login: string): SetAuthActionType => {
    return {
        type: SET_AUTH_DATA,
        data: {id, email, login}
    }
}

//////////////////////////////////////////////////// THUNK //////////////////////////////////////////

export const getAuthMe = () => {

    return (dispatch: Dispatch) => {
        authApi.getAuthMe()
            .then(respons => {
                if (respons.data.resultCode === 0) {
                    const {id, email, login} = respons.data.data
                    dispatch(setAuthData(id, email, login))
                }
            })
    }
}
