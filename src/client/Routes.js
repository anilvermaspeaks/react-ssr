import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User'

const Routes = () => {

    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
        </div>
    );

}

export default Routes;