import React from 'react';
import ReactDom from 'react-dom';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDom.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.querySelector('#root'));
