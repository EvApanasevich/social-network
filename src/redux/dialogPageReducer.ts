import {v1} from "uuid";

const ADD_NEW_MESSAGE = 'SOCIAL-NETWORK/DIALOG/ADD-NEW-MESSAGE'

export type DialogPageActionsType = AddMessageActionType

type AddMessageActionType = ReturnType<typeof sendMessage>

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
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
    ],
    messages: [
        {id: v1(), message: 'hello!'},
    ],
}

export const dialogReducer = (state: DialogPageType = initialState, action: DialogPageActionsType): DialogPageType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: v1(),
                message: action.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}

export const sendMessage = (newMessage: string) => {
    return {type: ADD_NEW_MESSAGE, newMessage: newMessage} as const
}
