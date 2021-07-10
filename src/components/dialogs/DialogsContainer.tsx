import {sendMessage, DialogPageType} from "../../redux/dialogPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import { compose } from "redux";
import React from "react";

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogPage: DialogPageType
}
type MapDispatchPropsType = {
    sendMessage: (newMessage: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect,
) (Dialogs)