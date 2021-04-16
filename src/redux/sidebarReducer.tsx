import {ActionsType, SidebarType} from "./Store";

const CHANGE_SHOW_FRIENDS = 'CHANGE-SHOW-FRIENDS'

let initialState = {
    friends: [
        {id: 1, name: 'Alena'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Kolya'},
        {id: 4, name: 'Usik'}
    ],
    showFriends: true
}

export const sidebarReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_SHOW_FRIENDS:
            state.showFriends = !state.showFriends
           return state
        default:
            return state
    }
}

export const changeShowFriendsAC = () => {
    return {
        type: 'CHANGE-SHOW-FRIENDS'
    } as const
}