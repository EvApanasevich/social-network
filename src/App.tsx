import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/settings/Settings";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";

export const App: React.FC = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavbarContainer />
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

