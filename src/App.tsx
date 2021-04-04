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
import {addNewPost, changeNewText, addNewMessage, changeNewMessage, changeShowFriends, StateType} from "./redux/State";


type PropsType = {
    state: StateType
}

export const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.state.sidebar}
                        changeShowFriends={changeShowFriends}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs dialogPage={props.state.dialogPage}
                                                                  addNewMessage={addNewMessage}
                                                                  changeNewMessage={changeNewMessage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  changeNewText={changeNewText}
                                                                  addNewPost={addNewPost}/>}/>

                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

