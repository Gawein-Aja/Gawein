import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Routes/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
