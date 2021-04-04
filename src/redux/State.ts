let rerenderTree = () => {
}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}
///////////////////////////////////////////////////////
export type ProfilePageType = {
    posts: Array<PostType>
    newText: string
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
////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////
export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, my friends!', likes: 15},
            {id: 2, message: 'yo, yo', likes: 6},
            {id: 3, message: 'ya-hu-how!', likes: 100}
        ],
        newText: '',
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
}

export const changeNewText = (text: string) => {
    state.profilePage.newText = text
    rerenderTree()
}
export const addNewPost = () => {
    state.profilePage.posts.push({id: 5, message: state.profilePage.newText, likes: 0})
    changeNewText('')
    rerenderTree()
}

export const changeNewMessage = (messageText: string) => {
    state.dialogPage.newMessage = messageText
    rerenderTree()
}

export const addNewMessage = () => {
    state.dialogPage.messages.push({id: 4, message: state.dialogPage.newMessage})
    changeNewMessage('')
    rerenderTree()
}

export const changeShowFriends = (showFriends: boolean) => {
    state.sidebar.showFriends = !showFriends
    rerenderTree()
}

export const subscriber = (observer: () => void) => {
    rerenderTree = observer
}

