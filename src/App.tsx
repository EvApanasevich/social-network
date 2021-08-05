import React, {Suspense} from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Settings} from "./components/settings/Settings";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/AppReducer";
import {AppRootStateType} from "./redux/Redux-store";
import {Preloader} from "./components/common/preloader/Preloader";

const Dialogs = React.lazy(() => import('./components/dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'))

type PropsType = {
    initializeApp: () => void
    initialized: boolean
}
type MapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => {
                            return <Suspense fallback={<Preloader/>}>
                                <Dialogs/>
                            </Suspense>
                        }}/>
                        <Route path='/users' render={() => {
                            return <Suspense fallback={<Preloader/>}>
                                <UsersContainer/>
                            </Suspense>
                        }}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/social-network' render={() => <Redirect to={'/profile'}/>}/>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter)(App)

