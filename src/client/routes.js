import React from 'react';

import HomePage from './pages/home-page';
import UsersListPage  from './pages/users-list-page';

export const routes = [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users',
    }
];