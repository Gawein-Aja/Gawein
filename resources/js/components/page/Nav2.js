import React, {Component} from 'react';

class Nav2 extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand bg-light rounded p-2" href="/">
                    <img src="https://drive.google.com/uc?id=1tS5F83No-pNAWEZMurWVyc0RT7NdfdxY"
                         height="30" className="d-inline-block align-top" alt=""/>
                </a>
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <a href="/login" className="btn btn-outline-primary mr-sm-2" role="button" aria-pressed="true">Login</a>
                        <a href="/register" className="btn btn-outline-secondary my-2 my-sm-0" role="button" aria-pressed="true">Register</a>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Nav2;
