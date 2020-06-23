import React from 'react';
import { withRouter } from "react-router";
import { Auth, User } from '../functions/UserFunctions';

class Header extends React.Component {

    constructor(props)
    {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();

        Auth.logout((response) => {
            this.props.history.push("/login");
        }, (err) => {
            alert(err.response.data.message);
        });
    }

    componentDidMount()
    {
        const checkauth = setInterval(() => {
            Auth.checkAuth((response) => {}, (err) => {
                clearInterval(checkauth);

                localStorage.clear();

            });
        }, 2000);
    }

    render() {
        return this.props.location.pathname != '/login' ? (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="py-0 d-block navbar-text dropdown-toggle" data-toggle="dropdown" href="#">
                            <img src={process.env.MIX_APP_URL + 'adminLTE/dist/img/avatar04.png'} style={{width: "2.1rem", height: "2.1rem"}} className="mr-2 rounded-circle" alt="User Image"/>
                            <span className="hidden-xs">{User.name()}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" className="py-2 px-3 d-block text-body">
                                <div className="text-center">
                                    <img src={process.env.MIX_APP_URL + 'adminLTE/dist/img/avatar04.png'} style={{width: "2.1rem", height: "2.1rem"}} className="ml-auto rounded-circle" alt="User Image"/>
                                    <p>{User.name()}</p>
                                    <p><small>Member since {User.created_at()}</small></p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                Profile
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" onClick={this.handleLogout} className="dropdown-item">
                                Sign out
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        ) : null
    }
}

export default withRouter(Header)
