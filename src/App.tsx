import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialods/DialogsContainer";
import {ActionsType, StateType} from "./redux/Store";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";

export type StoreType = {
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}
type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = (props) => {
    const {store} = props

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer store={store}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <DialogsContainer store={store}/>}/>
                    <Route path='/profile' render={() => <Profile store={store}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

