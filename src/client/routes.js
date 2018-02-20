import React from 'react';

import App from './app';
import HomePage from './pages/home-page';
import UsersListPage  from './pages/users-list-page';
import NotFoundPage from './pages/not-found-page';
import AdminsListPage from './pages/admins-list-page';

export const routes = [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

