import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home'

export const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
    </div>
);
