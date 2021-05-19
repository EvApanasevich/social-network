import {addMessage, changeMessage, DialogPageType} from "../../redux/dialogPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";

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

export const DialogsContainer = connect(mapStateToProps, {addMessage, changeMessage}) (Dialogs)