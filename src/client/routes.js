import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home'
import UsersList from './components/users-list';

export const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} />
    </div>
);
