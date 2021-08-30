import React from 'react';
import {Route, Redirect} from  "react-router-dom";
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/profile/selectors';

export const PrivateRoute = ({...props}) => {
    const auth = useSelector(selectAuth);

    return auth ? <Route {...props} /> : <Redirect to="/login" />
}