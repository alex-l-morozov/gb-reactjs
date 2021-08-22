import React, { useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Profile from "../Profile";
import Home from "../Home";
import { News } from "../News";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginForm } from "../LoginForm";
import { connectProfileToFB } from "../../store/profile/actions";
import { Logout } from "../Logout";

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectProfileToFB());
  }, []);

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/news">NEWS</Link>
        </li>
      </ul>

      <Logout />

      <Switch>
        <PrivateRoute
          path="/profile"
          render={(data) => (
            <Profile match={data.match} history={data.history} />
          )}
        />
        <PrivateRoute path="/home/:chatId?">
          <Home />
        </PrivateRoute>
        <PublicRoute path="/news">
          <News />
        </PublicRoute>
        <PrivateRoute path="/nochat">
          <div> No such chat</div>
          <Link to="/home">HOME</Link>
        </PrivateRoute>
        <Route path="/" exact>
          <h2>WELCOME</h2>
        </Route>
        <PublicRoute path="/login" exact>
          <LoginForm />
        </PublicRoute>
        <PublicRoute path="/signup" exact>
          <LoginForm isSignUp />
        </PublicRoute>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
