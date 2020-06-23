import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Landingpage from "./page/Landingpage";
import Loginpage from "./page/Loginpage";
import Regispage from "./page/Regispage";
import Profile from "./page/Profile";
import WorkerPage from "./page/WorkerPage";
import PrivateRoute from './tools/PrivateRoute';
import PublicRoute from './tools/PublicRoute';
import DashboardRouter from "./page/dashboard/DashboardRouter";

function App() {
    return (
        <Router>
            <Switch>
                <PublicRoute restricted={true} component={Landingpage} path="/" exact />
                <PublicRoute restricted={true} component={Loginpage} path="/login" />
                <PublicRoute restricted={true} component={Regispage} path="/register" exact />
                <PrivateRoute component={DashboardRouter} path="/dashboard" exact />
                {/*<PrivateRoute component={Profile} path="/profile" exact />*/}
                {/*<PrivateRoute component={WorkerPage} path="/worker" exact />*/}
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
