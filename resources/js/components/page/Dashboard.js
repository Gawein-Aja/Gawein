import React, {Component} from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-bgdarkmode fixed-top">
                    <button className="navbar-toggler sideMenuToggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="/">
                        <img src="/assets/logo-gawein.svg"
                             height="30" className="d-inline-block align-top" alt=""/>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle p-0"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className="text">Account</span>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="wrapper d-flex">
                    <div className="sideMenu bg-bgdarkmode">
                        <div className="sidebar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2">
                                        <span className="text">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2">
                                        <span className="text">User Profile</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2">
                                        <span className="text">Charts</span></a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2">
                                        <span className="text">Settings</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2">
                                        <span className="text">Pages</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2">
                                        <span className="text">Demo</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2 sideMenuToggler">
                                        <span className="text">Resize</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <main>
                            <div className="container-fluid">
                                <div className="row">

                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="bg-darkmode my-2 p-3">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Ratione libero totam rerum eos nam ab perspiciatis voluptatum
                                            in. Quidem natus autem quae. Velit accusamus sit, perspiciatis
                                            sunt earum tempora veniam.
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="bg-darkmode my-2 p-3">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Ratione libero totam rerum eos nam ab perspiciatis voluptatum
                                            in. Quidem natus autem quae. Velit accusamus sit, perspiciatis
                                            sunt earum tempora veniam.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
