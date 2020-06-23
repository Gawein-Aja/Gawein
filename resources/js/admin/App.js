import React, {Component} from 'react';
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Contents from "./components/partials/Contents";
import ReactDOM from "react-dom";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Contents />
                <Footer/>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
