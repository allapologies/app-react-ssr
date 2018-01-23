import React from 'react';
import Home from './components/home'
import UsersList from './components/users-list';

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: UsersList
    }
];