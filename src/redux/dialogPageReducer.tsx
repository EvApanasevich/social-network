import {ActionsType, DialogPageType} from "./Store";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'

export const dialogReducer = (state: DialogPageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            state.messages.push({id: 4, message: state.newMessage})
            state.newMessage = ''
            return state
        case CHANGE_NEW_MESSAGE:
            state.newMessage = action.messageText
            return state
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: "ADD-NEW-MESSAGE"
    } as const
}
export const changeMessageAC = (messageText: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        messageText: messageText
    } as const
}