import React, {useState, useRef, useEffect} from 'react';
import './index.scss';

const SeparationImg = (props) => {
    const imgRef = useRef(null);
    const [height, setHeight] = useState();

    useEffect(() => {
        const setProperties = () => {
            if(document.documentElement.clientWidth < 767.98) {
                setHeight(imgRef.current.clientWidth * 0.7);
            } else {
                setHeight('');
            }
            
        };
        setProperties();

        window.addEventListener('resize', setProperties);

        return () => {
            window.removeEventListener('resize', setProperties);
        };
    }, [height]);

    return (
        <div ref={imgRef} className="separation__img" style={{
            backgroundImage: `url(${props.bg})`,
            height: height,
        }}/>
    );
};

export default SeparationImg;