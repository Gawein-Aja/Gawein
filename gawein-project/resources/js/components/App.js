import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Landingpage from "./landingpage/Landingpage";
import Login from "./landingpage/Login";
import Regispage from "./landingpage/Regispage";
import Navbar from "./landingpage/Navbar";
import Profile from "./landingpage/Profile";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landingpage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Regispage} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
