import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkS} from "react-scroll";
import { withRouter } from "react-router";
import { User } from '../../../user/components/functions/UserFunctions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src="/assets/logo-gawein.svg"
                         height="30" className="d-inline-block align-top" alt=""/>
                </a>
                {this.props.location.pathname=='/'? (
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fas fa-bars"></span>
                    </button>
                ) :''}

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    {this.props.location.pathname=='/'? (
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <LinkS className="nav-link" activeClass="active" to="Home" spy={true} smooth={true}
                                       offset={-70} duration={500}>Home</LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS className="nav-link" activeClass="active" to="What" spy={true} smooth={true}
                                       offset={-70} duration={500}>What?</LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS className="nav-link" activeClass="active" to="Why" spy={true} smooth={true}
                                       offset={-70} duration={500}>Why?</LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS className="nav-link" activeClass="active" to="Procedure" spy={true} smooth={true}
                                       offset={-70} duration={500}>Procedure</LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS className="nav-link" activeClass="active" to="Contact" spy={true} smooth={true}
                                       offset={-70} duration={500}>Contact</LinkS>
                            </li>
                        </ul>
                    ) :''}

                    {!(User.access_token())? (
                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <a className="btn btn-outline-primary mr-sm-2" role="button" aria-pressed="true" href='/user/'>Login</a>
                        <Link className="btn btn-outline-secondary my-2 my-sm-0" role="button" aria-pressed="true" to='/register'>Register</Link>
                    </form>
                    ) :(
                    <ul className="navbar-nav user ml-auto">
                        <li className="nav-item dropdown user-menu">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                <img src={process.env.MIX_APP_URL + 'adminLTE/dist/img/avatar04.png'} className="user-image" alt="User Image"/>
                                <span className="hidden-xs">{User.name()}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="/user/" className="dropdown-item">
                                    Dashboard
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" onClick={this.handleLogout} className="dropdown-item">
                                    Sign out
                                </a>
                            </div>
                        </li>
                    </ul>
                    )}
                </div>
            </nav>
        );
    }
}

export default withRouter(Header)
