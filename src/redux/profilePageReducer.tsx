import {v1} from "uuid";

const ADD_NEW_POST = 'ADD-NEW-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

type ActionsType = AddPost | ChangePost

type AddPost = {
    type: 'ADD-NEW-POST'
}
type ChangePost = {
    type: "CHANGE-NEW-POST",
    postText: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPost: string
}
type PostType = {
    id: string
    message: string
    likes: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, my friends!', likes: 10},
        {id: v1(), message: 'yo, yo', likes: 5},
        {id: v1(), message: 'ya-hu-how!', likes: 7}
    ],
    newPost: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: v1(),
                message: state.newPost,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPost: action.postText
            }
        default:
            return state
    }
}

export const addPostAC = (): AddPost => {
    return {
        type: ADD_NEW_POST
    }
}
export const changePostAC = (postText: string): ChangePost => {
    return {
        type: CHANGE_NEW_POST,
        postText: postText
    }
}