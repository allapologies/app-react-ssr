import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import { routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers'

const axiosInstance = axios.create({
    baseURL: '/api'
});

const initialState = window.initialState;

const store = createStore(reducers, initialState, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
