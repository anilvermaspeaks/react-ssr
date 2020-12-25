import React from 'react';
import Home from './components/Home';
import User, { loadData } from './components/User'

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/user',
        component: User,
        loadData
    }
]