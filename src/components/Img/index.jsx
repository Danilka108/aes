import React, { useState, useRef, useEffect } from 'react';
import './index.scss';

const Img = (props) => {
    const [height, setHeight] = useState(0);
    const imgRefs = useRef([]);

    useEffect(() => {
        const setProperties = () => {
            setHeight(imgRefs.current[0].clientWidth * 0.7);
        };
        setProperties();

        window.addEventListener('resize', setProperties);

        return () => {
            window.removeEventListener('resize', setProperties);
        };
    }, [height]);

    return (
        <div className="img">
            {props.img.map((key, i) => {
                return (
                    <div key={i} ref={el => imgRefs.current[i] = el} className="img__item" style={{
                            backgroundImage: `url(${key})`,
                            height: height
                        }}
                    />
                )
            })}
        </div>
    );
};

export default Img;