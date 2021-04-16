import React from "react";
import {addMessageAC, changeMessageAC} from "../../redux/dialogPageReducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../App";

type PropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<PropsType> = (props) => {
    const {store} = props
    const dialogPage = store.getState().dialogPage

    const changeMessage = (inputText: string) => store.dispatch(changeMessageAC(inputText))
    const addMessage = () => store.dispatch(addMessageAC())

    return (
        <Dialogs addMessage={addMessage} changeMessage={changeMessage} dialogPage={dialogPage}/>
    )
}