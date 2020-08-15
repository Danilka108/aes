import React from 'react';
import './index.scss';

const SeparationContent = (props) => {
    return (
        <div className="separation__content">
            {props.children}
        </div>
    );
};

export default SeparationContent;