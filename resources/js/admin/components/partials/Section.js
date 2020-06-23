import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Section extends PureComponent {
    render() {
        const { children, title, id } = this.props;
        return (
            <section id={id} className="container align-items-center">
                <div className="row justify-content-around">
                    <div className="col-11">
                        <h1 className="text-center">{title}</h1>
                    </div>
                    {children}
                </div>
            </section>
        );
    }
}

Section.propTypes = {
    /** Contents of the card */
    children: PropTypes.node.isRequired,
    /** Title of the card */
    title: PropTypes.string.isRequired,

    id: PropTypes.string.isRequired,
};

export default Section;
