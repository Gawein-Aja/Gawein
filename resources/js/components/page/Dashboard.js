import React, {Component} from 'react';
import NavItem from "../tools/NavItem";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <aside className="sideMenu bg-bgdarkmode">
                    <div className="navbar">
                        <a className="mx-auto" href="/">
                            <img src="/assets/logo-gawein.svg"
                                 height="30" className="align-top logo-1" alt=""/>
                            <img src="/assets/icon.svg"
                                 height="30" className="align-top logo-2" alt=""/>
                        </a>
                    </div>
                    <div className="sidebar">
                        <ul className="nav nav-sidebar flex-column">
                            <li className="nav-item has-list open">
                                <a className="nav-link" data-toggle="collapse" href="#collapseExample"
                                   role="button" aria-expanded="true" aria-controls="collapseExample">
                                    <i className="fas fa-tachometer-alt icon"></i>{' '}
                                    <span className="text">
                                        Dashboard
                                        <i className="right fas fa-angle-left"></i>
                                    </span>
                                </a>
                                <div className="collapse show" id="collapseExample">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle icon"></i>{' '}
                                                <span className="text">Home</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle icon"></i>{' '}
                                                <span className="text">All Project</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle icon"></i>{' '}
                                                <span className="text">All Services</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <NavItem to="/dashboard/profile" icon="fas fa-user icon">Profile</NavItem>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-sliders-h icon"></i>
                                    <span className="text">Settings</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-file icon"></i>
                                    <span className="text">Pages</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="wrapper d-flex">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler sideMenuToggler" type="button">
                            <span className="fas fa-bars"></span>
                        </button>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link" data-toggle="dropdown" href="#"
                                   role="button" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user-circle"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
                <div className="sidebar-overlay"></div>
            </div>
        );
    }
}

export default Dashboard;
