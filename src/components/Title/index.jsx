import React from 'react';
import './index.scss';

const Title = (props) => {
    return (
        <div className="wrapper title">
            {props.children}
        </div>
    );
};

export default Title;