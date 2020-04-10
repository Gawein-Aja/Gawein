import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Landingpage from "./page/Landingpage";
import Loginpage from "./page/Loginpage";
import Regispage from "./page/Regispage";
import Profile from "./page/Profile";
import WorkerPage from "./page/WorkerPage";
import Dashboard from "./page/Dashboard";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landingpage} />
                <Route path="/login" component={Loginpage} />
                <Route path="/register" component={Regispage} />
                <Route path="/profile" component={Profile} />
                <Route path="/worker" component={WorkerPage} />
                <Route path="/dash" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
