import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profilePageReducer";
import {DialogPageActionsType, dialogReducer} from "./dialogPageReducer";
import {SidebarActionsType, sidebarReducer} from "./sidebarReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./authReducer";
import {AppCommonActionType, AppReducer} from "./AppReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: AppReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType =
    | AuthActionType
    | DialogPageActionsType
    | ProfileActionsType
    | SidebarActionsType
    | UsersActionsType
    | AppCommonActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

