import React from 'react';
import { withRouter } from "react-router";

const Footer  = (props) => {
    return props.location.pathname != '/login'?(
        <footer id="Contact" className="container-fluid bg-dark align-items-center">
            <div className="container">
                <div className="row justify-content-around footer-body">
                    <div className="col-xs-12 col-sm-6 col-lg-5">
                        <h5 className="widget-title">Contact Us<span></span></h5>
                        <p><i className="fas fa-user mr-2"></i>Gina Melinia - WP Penjualan.</p>
                        <p><i className="fas fa-mobile-alt mr-2"></i>+6282321570639</p>
                        <p><i className="fas fa-user mr-2"></i>Adhitya Febhiakbar - Chief Marketing Officer.</p>
                        <p><i className="fas fa-mobile-alt mr-2"></i>+6282262465487</p>
                        <p>
                            <a>
                                <i className="fab fa-instagram mr-2"></i>
                                @gawein
                            </a>
                        </p>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-lg-3 offset-lg-3">
                        <h5 className="widget-title">Subscribe<span></span></h5>
                        <form className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Name" />
                            <input className="form-control" type="email" name="email" placeholder="Email Address" />
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row justify-content-around footer-copyright">
                <div className="col-md-12 text-center">
                    <p>Copyright Gawein Aja © 2020. All rights reserved.</p>
                </div>
            </div>
        </footer>
    ):null;
};

export default withRouter(Footer);
