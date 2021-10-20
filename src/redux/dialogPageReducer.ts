import { dialogsApi } from './../api/api';
import { PhotosType } from './usersReducer';
import { AppThunkType } from "./Redux-store";

const SET_ALL_DIALOGS = 'SOCIAL_NETWORK/DIALOG/SET_ALL_DIALOGS'
const SET_ACTIVE_DIALOG = 'SOCIAL_NETWORK/DIALOG/SET_ACTIVE_DIALOG'
const SET_MESSAGES = 'SOCIAL_NETWORK/DIALOG/SET_MESSAGES'

export type DialogPageActionsType = SetAllDialogsActionType | setActiveDialogActionType | setMessagesActionType

type SetAllDialogsActionType = ReturnType<typeof setAllDialogs>
type setActiveDialogActionType = ReturnType<typeof setActiveDialog>
type setMessagesActionType = ReturnType<typeof setMessages>

export type DialogPageType = {
   dialogs: Array<DialogType>
   activeDialogId: number | null
   messages: Array<MessageType>
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
   messages: [],
   messagesTotalCount: 0
}

export const dialogReducer = (state: DialogPageType = initialState, action: DialogPageActionsType): DialogPageType => {
   switch (action.type) {
      case SET_ALL_DIALOGS:
      case SET_ACTIVE_DIALOG:
      case SET_MESSAGES:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state
   }
}

export const setAllDialogs = (dialogs: Array<DialogType>) => {
   return { type: SET_ALL_DIALOGS, payload: { dialogs } } as const
}
export const setActiveDialog = (activeDialogId: number) => {
   return { type: SET_ACTIVE_DIALOG, payload: { activeDialogId } } as const
}
const setMessages = (messages: Array<MessageType>, messagesTotalCount: number) => {
   return { type: SET_MESSAGES, payload: { messages, messagesTotalCount } } as const
}

export const createNewDialog = (userId: number): AppThunkType => async dispatch => {
   try {
      const res = await dialogsApi.createDialog(userId)
      if (res.data.resultCode === 0) {
      }
   } catch (error) { }
}

export const getAllDialogs = (): AppThunkType => async dispatch => {
   try {
      const res = await dialogsApi.getDialogs()
      dispatch(setAllDialogs(res.data))
   } catch (error) { }
}

export const sendMessage = (message: string): AppThunkType => async (dispatch, getState) => {
   const id = getState().dialogPage.activeDialogId
   try {
      const res = await dialogsApi.sendMessage(id, message)
      if (res.data.resultCode === 0) {
         dispatch(getMessages(id))
      }
   } catch { }
}

export const getMessages = (id: number | null): AppThunkType => async dispatch => {
   try {
      const res = await dialogsApi.getMessages(id)
      dispatch(setMessages(res.data.items, res.data.totalCount))
   } catch { }
}

export const deleteMessage = (messageId: string): AppThunkType => async (dispatch, getState) => {
   const id = getState().dialogPage.activeDialogId
   try {
      const res = await dialogsApi.deleteMessage(messageId)
      if (res.data.resultCode === 0) {
         dispatch(getMessages(id))
      }
   } catch { }
}
