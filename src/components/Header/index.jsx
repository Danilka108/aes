import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = (props) => {
    const [isBodyShadow, setIsBodyShadow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const headerRef = useRef(null);
    
    useEffect(() => {
        const handleWindowClick = (e) => {
            if(toggle && e.target !== headerRef.current && !headerRef.current.contains(e.target)) {
                handleClose();
            }
        };

        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        }
    }, [toggle]);

    const handleOpen = () => {
        setToggle(true);
        setIsBodyShadow(true);
    };

    const handleClose = () => {
        setToggle(false);
        setIsBodyShadow(false);
    };

    const handleLinkClick = (i) => {
        props.onClick(i);
        handleClose();
    };

    return (
        <>
            <div className="body-shadow" style={{
                opacity: isBodyShadow ? '0.5' : '0',
            }}/>
            <div className="header__open" onClick={handleOpen}>
                <div/>
                <div/>
                <div/>
            </div>
            <div ref={headerRef} className={`header ${toggle ? 'active' : ''}`}>
                <div className="header__close" onClick={handleClose}>
                    <div/>
                    <div/>
                </div>
                {props.pages.path.map((key, i) => {
                    return (
                        <Link key={i} className={`header__item ${i === props.activePage ? 'active' : ''}`} to={key} onClick={() => handleLinkClick(i)}>
                            {props.pages.name[i]}
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Header;