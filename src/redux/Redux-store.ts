import {applyMiddleware, combineReducers, createStore } from "redux";
import {profileReducer} from "./profilePageReducer";
import {dialogReducer} from "./dialogPageReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: AuthReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

