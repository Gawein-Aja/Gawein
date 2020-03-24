import React from 'react';

function Nav() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand bg-light rounded p-2" href="/">
                <img src="https://drive.google.com/uc?id=1tS5F83No-pNAWEZMurWVyc0RT7NdfdxY"
                     height="30" className="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <a className="nav-link" href="#Home">Home</a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <a className="nav-link" href="#What">What?</a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <a className="nav-link" href="#Why">Why?</a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <a className="nav-link" href="#Procedure">Procedure</a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <a href="/login" className="btn btn-outline-primary mr-sm-2" role="button" aria-pressed="true">Login</a>
                    <a href="/register" className="btn btn-outline-secondary my-2 my-sm-0" role="button" aria-pressed="true">Register</a>
                </form>
            </div>
        </nav>
    );
}

export default Nav;
