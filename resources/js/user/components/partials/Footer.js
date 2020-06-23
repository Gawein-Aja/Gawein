import React from 'react';
import { withRouter } from "react-router";
 
const Footer  = (props) => {
  	return props.location.pathname != '/login'?(
      	<footer className="main-footer">
      		{/*<!-- To the right -->*/}
      		<div className="float-right d-none d-sm-inline">
        		Anything you want
      		</div>
  	    	{/*<!-- Default to the left -->*/}
  	    	<strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  		</footer>
  	):null;
};
 
export default withRouter(Footer);