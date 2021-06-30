import React from "react"
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {Header} from "./Header";
import {getAuthMe} from "../../redux/authReducer";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthMe: () => void
}

export class HeaderApiContainer extends React.Component<HeaderPropsType> {

    componentDidMount(): void {
        this.props.getAuthMe()
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
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

export const HeaderContainer = connect(mapStateToProps, {getAuthMe}) (HeaderApiContainer)

