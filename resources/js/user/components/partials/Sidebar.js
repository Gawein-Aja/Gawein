import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { User } from "../functions/UserFunctions";

const Sidebar = props => {
    console.log(props.location);
    return props.location.pathname != "/login" ? (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/" className="brand-link text-center">
                <img
                    src="/assets/logo-gawein.svg"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                />
            </a>
            <section className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src={
                                process.env.MIX_APP_URL +
                                "adminLTE/dist/img/avatar04.png"
                            }
                            className="img-circle elevation-2"
                            alt="User Image"
                        />
                    </div>
                    <div className="info">
                        <p href="#" className="mb-0 text-white-50 d-block">
                            {User.name()}
                        </p>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="mb-3">
                            <span className="text-white-50">
                                MAIN NAVIGATION
                            </span>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    props.location.pathname == "/"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/"
                            >
                                <i className="nav-icon fas fa-tachometer-alt"></i>{" "}
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li
                            className={
                                props.location.pathname.substring(0, 6) ==
                                "/posts"
                                    ? "nav-item has-treeview menu-open"
                                    : "nav-item has-treeview"
                            }
                        >
                            <a
                                href="#"
                                className={
                                    props.location.pathname.substring(0, 6) ==
                                    "/posts"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                <i className="nav-icon fa fa-th"></i>
                                <p>
                                    My Posts
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link
                                        to="/posts/"
                                        className={
                                            props.location.pathname == "/posts/"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Posts</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/posts/add"
                                        className={
                                            props.location.pathname ==
                                            "/posts/add"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Post Add</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className={props.location.pathname=='/categories'?'nav-link active':'nav-link'} to='/categories'>*/}
                        {/*        <i className="nav-icon fa fa-list"></i> <span>Categories</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link className={props.location.pathname=='/tags'?'nav-link active':'nav-link'} to='/tags'>*/}
                        {/*        <i className="nav-icon fa fa-tags"></i> <span>Tags</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link className={props.location.pathname=='/comments'?'nav-link active':'nav-link'} to='/comments'>*/}
                        {/*        <i className="nav-icon fa fa-comments"></i> <span>Comments</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link className={props.location.pathname=='/users'?'nav-link active':'nav-link'} to='/users'>*/}
                        {/*        <i className="nav-icon fa fa-users"></i> <span>Users</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </section>
        </aside>
    ) : null;
};

export default withRouter(Sidebar);
