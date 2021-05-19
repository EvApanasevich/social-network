import React from "react"
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/Redux-store";
import {Header} from "./Header";
import axios from "axios";
import {setAuthData} from "../../redux/AuthReducer";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {}
type MapDispatchPropsType = {
    setAuthData: (id: number, email: string, login: string) => void
}

export class HeaderApiContainer extends React.Component<HeaderPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(respons => {
                if (respons.data.resultCode === 0) {
                    const {id, email, login} = respons.data.data
                  this.props.setAuthData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {

}

export const HeaderContainer = connect(mapStateToProps, {setAuthData})(HeaderApiContainer)

