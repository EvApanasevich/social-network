import {ActionsType, ProfilePageType} from "./Store";

const ADD_NEW_POST = 'ADD-NEW-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_POST:
            state.posts.push({id: 5, message: state.newPost, likes: 0})
            state.newPost = ''
            return state
        case CHANGE_NEW_POST:
            state.newPost = action.postText
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-NEW-POST'
    } as const
}
export const changePostAC = (postText: string) => {
    return {
        type: "CHANGE-NEW-POST",
        postText: postText
    } as const
}