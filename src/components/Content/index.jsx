import React from 'react';
import './index.scss';

const Content = (props) => {
    return (
        <section className="wrapper content">
            {props.children}
        </section>
    );
};

export default Content;