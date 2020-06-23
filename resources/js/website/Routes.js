import React, {Component} from 'react';
import {Switch} from "react-router";
import { Route } from 'react-router-dom';
import Landing from "./components/pages/Landing";
import Register from "./components/pages/Register";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route component={Landing} path="/" exact />
                <Route component={Register} path="/register" exact />
            </Switch>
        );
    }
}

export default Routes;
