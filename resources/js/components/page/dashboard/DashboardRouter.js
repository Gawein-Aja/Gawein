import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "../../tools/PrivateRoute";
import Dashboard from "../Dashboard";
import Profile from "../Profile";
import ListWorkers from "./ListWorkers";


function DashboardRouter(props) {
    return (
        <Dashboard>
            <Router>
                <Switch>
                    <PrivateRoute component={Profile} path="/dashboard/profile" exact />
                    <PrivateRoute component={ListWorkers} path="/dashboard" exact />
                </Switch>
            </Router>
        </Dashboard>
    );
}

export default DashboardRouter;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<DashboardRouter />, document.getElementById('dashboard'));
}
