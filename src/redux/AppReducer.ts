import {AppThunkType} from "./Redux-store";
import {getAuthMe} from "./authReducer";

const SET_INITIALIZATION = 'SOCIAL-NETWORK/APP/SET_INITIALIZATION'

export type AppCommonActionType = SetInitializationActionType
type SetInitializationActionType = ReturnType<typeof setInitialization>
export type AppCommonType = {
    initialized: boolean
}

const initialState: AppCommonType = {
    initialized: false
}

export const AppReducer = (state: AppCommonType = initialState, action: AppCommonActionType): AppCommonType => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//////////////////////////////////////////////////// action creators ///////////////////////////////

export const setInitialization = () => {
    return {type: SET_INITIALIZATION} as const
}

//////////////////////////////////////////////////// THUNK //////////////////////////////////////////

export const initializeApp = (): AppThunkType => dispatch => {

    const promise = dispatch(getAuthMe())

    Promise.all([promise])
        .then(() => {
            dispatch(setInitialization())
        })
}

