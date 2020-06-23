import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect, withRouter } from'react-router';
import { User } from '../functions/UserFunctions';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        User.access_token() ?
            <Component {...props} />
            : <Redirect to={{pathname: "/login", state: {from: props.location}}} />
    )} />
);

export default withRouter(PrivateRoute);
