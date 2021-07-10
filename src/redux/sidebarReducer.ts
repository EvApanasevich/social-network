import {v1} from "uuid";

const CHANGE_SHOW_FRIENDS = 'SOCIAL-NETWORK/SIDEBAR/CHANGE-SHOW-FRIENDS'

export type SidebarActionsType = ChangeShowFriendsActionType
type ChangeShowFriendsActionType = ReturnType<typeof changeShowFriends>

export type SidebarType = {
    friends: Array<FriendsType>
    showFriends: boolean
}
type FriendsType = {
    id: string
    name: string
}

const initialState: SidebarType = {
    friends: [
        {id: v1(), name: 'Alena'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Kolya'},
        {id: v1(), name: 'Usik'}
    ],
    showFriends: true
}

export const sidebarReducer = (state: SidebarType = initialState, action: SidebarActionsType): SidebarType => {
    switch (action.type) {
        case CHANGE_SHOW_FRIENDS:
            return {
                ...state,
                showFriends: !state.showFriends
            }
        default:
            return state
    }
}

export const changeShowFriends = () => {
    return {type: CHANGE_SHOW_FRIENDS} as const
}