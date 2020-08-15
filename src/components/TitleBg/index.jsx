import React from 'react';
import './index.scss';

const TitleBg = (props) => {
    return (
        <div className="title__bg" style={{
            backgroundImage: props.bg ? `url(${props.bg})` : '',
        }}>
            {props.children}
        </div>
    );
};

export default TitleBg;