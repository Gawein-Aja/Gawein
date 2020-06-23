import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Post} from "../functions/PostFunction";
import {withRouter} from "react-router";

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, children } = this.props;
        return (
            <div>
                <div className="modal fade" id="modalupdate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={{display: 'none'}} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    {title}
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired

};

export default withRouter(Modal);
