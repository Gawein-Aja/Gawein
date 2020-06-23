import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {
    render() {
        let isActive = this.context.router.route.location.pathname === this.props.to;
        let className = isActive ? "nav-link active" : "nav-link";

        return (
            <li className="nav-item">
                <a href={this.props.to} className={className}>
                    <i className={this.props.icon}></i>
                    <span className="text">{this.props.children}</span>
                </a>
            </li>
        );
    }
}

NavItem.contextTypes = {
    router: PropTypes.object
};

export default NavItem;
