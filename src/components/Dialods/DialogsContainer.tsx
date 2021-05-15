import {addMessageAC, changeMessageAC, DialogPageType} from "../../redux/dialogPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux"

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogPage: DialogPageType
}
type MapDispatchPropsType = {
    addMessage: () => void
    changeMessage: (inputText: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        changeMessage: (inputText: string) => {
            dispatch(changeMessageAC(inputText))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)