import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/Redux-store'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
reportWebVitals();
