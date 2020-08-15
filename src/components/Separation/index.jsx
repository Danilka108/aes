import React from 'react';
import './index.scss';

const Separation = (props) => {
    return (
        <div className="separation">
            {props.children}
        </div>
    );
};

export default Separation;