import React from "react"
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {Header} from "./Header";
import {logout} from "../../redux/authReducer";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    logout: () => void
}

export class HeaderApiContainer extends React.Component<HeaderPropsType> {

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {logout}) (HeaderApiContainer)

