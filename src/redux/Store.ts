export type StoreType = {
    _state: StateType
    _rerenderTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}
/////////////////////////////////////
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}
/////////////////////////////////////
export type ProfilePageType = {
    posts: Array<PostType>
    newPost: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}
export type SidebarType = {
    friends: Array<FriendsType>
    showFriends: boolean
}
/////////////////////////////////////
export type PostType = {
    id: number
    message: string
    likes: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendsType = {
    id: number
    name: string
}
////////////////////////////////////
export type ActionsType = AddNewPostActionType | ChangeNewPostActionType | AddNewMessageActionType |
    ChangeNewMessageActionType | ChangeShowFriendsActionType

type AddNewPostActionType = {
    type: 'ADD-NEW-POST'
}
type ChangeNewPostActionType = {
    type: 'CHANGE-NEW-POST'
    postText: string
}
type AddNewMessageActionType = {
    type: 'ADD-NEW-MESSAGE'
}
type ChangeNewMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE'
    messageText: string
}
type ChangeShowFriendsActionType = {
    type: 'CHANGE-SHOW-FRIENDS'
}

export const addPostAC = (): AddNewPostActionType => {
    return {
        type: 'ADD-NEW-POST'
    }
}
export const changePostAC = (postText: string): ChangeNewPostActionType => {
    return {
        type: "CHANGE-NEW-POST",
        postText: postText
    }
}
export const addMessageAC = (): AddNewMessageActionType => {
    return {
        type: "ADD-NEW-MESSAGE"
    }
}
export const changeMessageAC = (messageText: string): ChangeNewMessageActionType => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        messageText: messageText
    }
}
export const changeShowFriendsAC = (): ChangeShowFriendsActionType => {
    return {
        type: 'CHANGE-SHOW-FRIENDS'
    }
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, my friends!', likes: 15},
                {id: 2, message: 'yo, yo', likes: 6},
                {id: 3, message: 'ya-hu-how!', likes: 100}
            ],
            newPost: '',
        },
        dialogPage: {
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
            newMessage: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Alena'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Kolya'},
                {id: 4, name: 'Usik'}
            ],
            showFriends: true,
        }
    },
    _rerenderTree() {},
    subscriber(observer: () => void) {
        this._rerenderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            this._state.profilePage.posts.push({id: 5, message: this._state.profilePage.newPost, likes: 0})
            this._state.profilePage.newPost = ''
            this._rerenderTree()
        } else if (action.type === 'CHANGE-NEW-POST') {
            this._state.profilePage.newPost = action.postText
            this._rerenderTree()
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this._state.dialogPage.messages.push({id: 4, message: this._state.dialogPage.newMessage})
            this._state.dialogPage.newMessage = ''
            this._rerenderTree()
        } else if (action.type === 'CHANGE-NEW-MESSAGE') {
            this._state.dialogPage.newMessage = action.messageText
            this._rerenderTree()
        } else if (action.type === 'CHANGE-SHOW-FRIENDS') {
            this._state.sidebar.showFriends = !this._state.sidebar.showFriends
            this._rerenderTree()
        }
    }
}




