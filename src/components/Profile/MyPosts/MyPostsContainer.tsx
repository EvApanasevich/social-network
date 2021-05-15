import {addPostAC, changePostAC, ProfilePageType} from '../../../redux/profilePageReducer'
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux"
import {connect} from "react-redux";

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    changePost: (inputText: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        changePost: (inputText: string) => {
            dispatch(changePostAC(inputText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)