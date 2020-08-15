import React from 'react';
import './index.scss';

const Title = (props) => {
    return (
        <section className="wrapper title">
            {props.children}
        </section>
    );
};

export default Title;