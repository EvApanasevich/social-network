import React from 'react'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import { Redirect } from 'react-router-dom';
import {AppRootStateType} from "../../redux/Redux-store";
import LoginForm from "./LoginForm";
import style from "./Login.module.css";

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
        <div  className={style.logForm}>
            <div className={style.info}>
                To login in the application, please enter the email and password of the test account<br/>
                Email: <span>free@samuraijs.com</span><br/>
                Password: <span>free</span>
            </div>
            <h2>Login</h2>
            <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login)
