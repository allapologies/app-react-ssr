import React from 'react';
import Home from './components/home'
import UsersList, { loadData } from './components/users-list';

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList,
    }
];