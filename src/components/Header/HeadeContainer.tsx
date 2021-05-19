import React from "react"
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {Header} from "./Header";
import {setAuthData} from "../../redux/AuthReducer";
import {authApi} from "../../api/api";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    setAuthData: (id: number, email: string, login: string) => void
}

export class HeaderApiContainer extends React.Component<HeaderPropsType> {

    componentDidMount(): void {
        authApi.getAuthMe()
            .then(data => {
                    const {id, email, login} = data
                    this.props.setAuthData(id, email, login)
                }
            )
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthData}) (HeaderApiContainer)

