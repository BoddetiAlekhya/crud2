import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { create } from 'domain';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
