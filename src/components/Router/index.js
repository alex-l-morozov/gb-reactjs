import React from 'react';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Home from '../Home';
import Profile from '../Profile';

export const Router = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/home'>HOME</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/' exact>
                    <h1>Welcome</h1>
                </Route>
                <Route path='/home/:chatId?'>
                    <Home />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path="*">
                    <h1>404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}