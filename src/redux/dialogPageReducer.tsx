import {ActionsType} from "./Store";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Alena'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Pavel'}
    ],
    messages: [
        {id: 1, message: 'hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good!'}
    ],
    newMessage: ''
}

export const dialogReducer = (state = initialState, action: ActionsType) => {
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