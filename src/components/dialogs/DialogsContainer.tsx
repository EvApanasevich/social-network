import {sendMessage, DialogPageType} from "../../redux/dialogPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import { compose } from "redux";

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogPage: DialogPageType
    isAuth: boolean
}
type MapDispatchPropsType = {
    sendMessage: (newMessage: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect,
) (Dialogs)

const withAuthRedirectContainer = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, {sendMessage}) (withAuthRedirectContainer)