import {dialogsApi} from './../api/api';
import {PhotosType} from './usersReducer';
import {AppThunkType} from "./Redux-store";

const SET_ALL_DIALOGS = 'SOCIAL_NETWORK/DIALOG/SET_ALL_DIALOGS'
const SET_ACTIVE_DIALOG = 'SOCIAL_NETWORK/DIALOG/SET_ACTIVE_DIALOG'
const SET_MESSAGES = 'SOCIAL_NETWORK/DIALOG/SET_MESSAGES'
const SET_MESSAGES_CURRENT_PAGE = 'SOCIAL_NETWORK/DIALOG/SET_MESSAGES_CURRENT_PAGE'
const SET_DIALOG_IS_OPEN = 'SOCIAL_NETWORK/DIALOG/SET_DIALOG_IS_OPEN'

export type DialogPageActionsType =
    | SetAllDialogsActionType
    | setActiveDialogActionType
    | setMessagesActionType
    | setMessagesCurrentPageActionType
    | setDialogIsOpenActionType

type SetAllDialogsActionType = ReturnType<typeof setAllDialogs>
type setActiveDialogActionType = ReturnType<typeof setActiveDialog>
type setMessagesActionType = ReturnType<typeof setMessages>
type setMessagesCurrentPageActionType = ReturnType<typeof setMessagesCurrentPage>
type setDialogIsOpenActionType = ReturnType<typeof setDialogIsOpen>

export type DialogPageType = {
    dialogs: Array<DialogType>
    activeDialogId: number | null
    dialogIsOpen: boolean
    messages: Array<MessageType>
    messagesCount: number
    messagesCurrentPage: number
    messagesTotalCount: number
}
export type DialogType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
}
export type MessageType = {
    id: string
    body: string
    addedAt: string
    recipientId: number
    senderId: number
    senderName: string
    translatedBody: string | null
    viewed: boolean
}

let initialState: DialogPageType = {
    dialogs: [],
    activeDialogId: null,
    dialogIsOpen: false,
    messages: [],
    messagesCount: 20,
    messagesCurrentPage: 1,
    messagesTotalCount: 0
}

export const dialogReducer = (state: DialogPageType = initialState, action: DialogPageActionsType): DialogPageType => {
    switch (action.type) {
        case SET_ALL_DIALOGS:
        case SET_ACTIVE_DIALOG:
        case SET_MESSAGES:
        case SET_MESSAGES_CURRENT_PAGE:
        case SET_DIALOG_IS_OPEN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//ACTIONS
export const setAllDialogs = (dialogs: Array<DialogType>) => {
    return {type: SET_ALL_DIALOGS, payload: {dialogs}} as const
}
export const setActiveDialog = (activeDialogId: number | null) => {
    return {type: SET_ACTIVE_DIALOG, payload: {activeDialogId}} as const
}
export const setDialogIsOpen = (dialogIsOpen: boolean) => {
    return {type: SET_DIALOG_IS_OPEN, payload: {dialogIsOpen}}
}
const setMessages = (messages: Array<MessageType>, messagesTotalCount: number) => {
    return {type: SET_MESSAGES, payload: {messages, messagesTotalCount}} as const
}
const setMessagesCurrentPage = (messagesCurrentPage: number) => {
    return {type: SET_MESSAGES_CURRENT_PAGE, payload: {messagesCurrentPage}} as const
}

//THUNK
export const createNewDialog = (userId: number): AppThunkType => async (dispatch, getState) => {
    const messagesCount = getState().dialogPage.messagesCount
    try {
        const res = await dialogsApi.createDialog(userId)
        if (res.data.resultCode === 0) {
            dispatch(setActiveDialog(userId))
            dispatch(getMessages(1, messagesCount))
            dispatch(getAllDialogs())
        }
    } catch (error) {
    }
}

export const getAllDialogs = (): AppThunkType => async dispatch => {
    try {
        const res = await dialogsApi.getDialogs()
        dispatch(setAllDialogs(res.data))
    } catch (error) {
    }
}

export const sendMessage = (message: string): AppThunkType => async (dispatch, getState) => {
    const id = getState().dialogPage.activeDialogId
    const messagesCount = getState().dialogPage.messagesCount
    try {
        const res = await dialogsApi.sendMessage(id, message)
        if (res.data.resultCode === 0) {
            dispatch(getMessages(1, messagesCount))
        }
    } catch {
    }
}

export const getMessages = (messagesCurrentPage: number, messagesCount: number): AppThunkType => async (dispatch, getState) => {
    const activeDialogId = getState().dialogPage.activeDialogId
    try {
        dispatch(setMessagesCurrentPage(messagesCurrentPage))
        const res = await dialogsApi.getMessages(activeDialogId, messagesCurrentPage, messagesCount)
        dispatch(setMessages(res.data.items, res.data.totalCount))
    } catch {
    }
}

export const deleteMessage = (messageId: string): AppThunkType => async (dispatch, getState) => {
    const messagesCurrentPage = getState().dialogPage.messagesCurrentPage
    const messagesCount = getState().dialogPage.messagesCount
    try {
        const res = await dialogsApi.deleteMessage(messageId)
        if (res.data.resultCode === 0) {
            dispatch(getMessages(messagesCurrentPage, messagesCount))
        }
    } catch {
    }
}
