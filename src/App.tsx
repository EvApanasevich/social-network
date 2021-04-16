import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialods/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {ActionsType, StateType} from "./redux/Store";


type StoreType = {
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = (props) => {
    const {store} = props
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={state.sidebar}
                        dispatch={store.dispatch.bind(store)}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs dialogPage={state.dialogPage}
                                                                  dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                  dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

