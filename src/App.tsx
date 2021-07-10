import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {Settings} from "./components/settings/Settings";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/AppReducer";
import {AppRootStateType} from "./redux/Redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

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
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className={'app-wrapper-content'}>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route exact path='/' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
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

