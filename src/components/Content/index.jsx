import React from 'react';
import './index.scss';

const Content = (props) => {
    return (
        <div className="wrapper content">
            {props.children}
        </div>
    );
};

export default Content;