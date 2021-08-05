import React from 'react'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import { Redirect } from 'react-router-dom';
import {AppRootStateType} from "../../redux/Redux-store";
import LoginForm from "./LoginForm";

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export type FormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType>= (props) => {

    const {login, isAuth, captchaUrl} = props

    const onSubmit = (formData: FormType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAuth) {
       return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login)
