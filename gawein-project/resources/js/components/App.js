import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Landingpage from "./landingpage/Landingpage";
import Loginpage from "./landingpage/Loginpage";
import Regispage from "./landingpage/Regispage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landingpage} />
                <Route path="/login" component={Loginpage} />
                <Route path="/register" component={Regispage} />
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
