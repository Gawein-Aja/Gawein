import React, {Component} from 'react';
import {Switch} from "react-router";
import { Route } from 'react-router-dom';
import PrivateRoute from "./components/partials/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import MyPost from "./components/pages/MyPost";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <PrivateRoute component={Dashboard} path="/" exact />
                <PrivateRoute component={MyPost} path="/posts" exact />
                <Route component={Login} path="/login" exact />
            </Switch>
        );
    }
}

export default Routes;
