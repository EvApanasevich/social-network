import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/Redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'} />

        return <Component {...restProps as T} />
    }

    const RedirectedComponent = connect(mapStateToProps)(RedirectComponent)
    return RedirectedComponent
}