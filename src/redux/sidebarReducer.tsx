import {ActionsType, SidebarType} from "./Store";

const CHANGE_SHOW_FRIENDS = 'CHANGE-SHOW-FRIENDS'

export const sidebarReducer = (state: SidebarType, action: ActionsType) => {
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