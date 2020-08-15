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
            <button className="header__open" onClick={handleOpen}>
                <div className="header__open-inner" tabindex='-1'>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </button>
            <header ref={headerRef} className={`header ${toggle ? 'active' : ''}`}>
                <button className="header__close" onClick={handleClose}>
                    <div className="header__close-inner" tabindex='-1'>
                        <div/>
                        <div/>
                    </div>
                </button>
                {props.pages.path.map((key, i) => {
                    return (
                        <Link key={i} className={`header__item ${i === props.activePage ? 'active' : ''}`} to={key} onClick={() => handleLinkClick(i)}>
                            <div className="header__item-inner" tabindex='-1'>
                                {props.pages.name[i]}
                            </div>
                        </Link>
                    );
                })}
            </header>
        </>
    );
};

export default Header;