import {v1} from "uuid";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'

export type DialogPageActionsType = AddMessageActionType | ChangeMessageActionType

type AddMessageActionType = {
    type: "ADD-NEW-MESSAGE"
}
type ChangeMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE',
    messageText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

let initialState: DialogPageType = {
    dialogs: [
        {id: v1(), name: 'Alena'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Pavel'}
    ],
    messages: [
        {id: v1(), message: 'hello!'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Good!'}
    ],
    newMessage: ''
}

export const dialogReducer = (state: DialogPageType = initialState, action: DialogPageActionsType): DialogPageType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: v1(),
                message: state.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage: ''
            }
        case CHANGE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.messageText
            }
        default:
            return state
    }
}

export const addMessage = (): AddMessageActionType => {
    return {
        type: ADD_NEW_MESSAGE
    }
}
export const changeMessage = (messageText: string): ChangeMessageActionType => {
    return {
        type: CHANGE_NEW_MESSAGE,
        messageText: messageText
    }
}