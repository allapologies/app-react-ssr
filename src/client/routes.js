import React from 'react';

import HomePage from './pages/home-page';
import UsersListPage, { loadData } from './pages/users-list-page';

export const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersListPage,
    }
];