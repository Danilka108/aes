import React, { useState, useEffect, useRef, useCallback } from 'react';
import './index.scss';

const Slider = (props) => {
    const animationDuration = 1;
    const timerDuration = 3000;
    const firstRender = useRef(true);
    const slidesRefs = useRef([]);
    const mouseDownPos = useRef(null);
    const mouseMovePos = useRef(null);
    const disableKeyboard = useRef(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [disableSliding, setDisableSliding] = useState(false);

    const handleUpdateSlide = useCallback((i) => {
        if(!disableSliding) {
            setPrevSlide(currentSlide);
            setCurrentSlide(i);
            setDisableSliding(true);
            disableKeyboard.current = true;
            setTimeout(() => {
                setDisableSliding(false);
                disableKeyboard.current = false;
            }, animationDuration * 1000);
        }
    }, [disableSliding, currentSlide]);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleUpdateSlide(currentSlide + 1 > slidesRefs.current.length - 1 ? 0 : currentSlide + 1);
        }, timerDuration);

        if(firstRender.current) {
            firstRender.current = false;
            slidesRefs.current[currentSlide].style.animation = `sliderItemPrevOpacity 0s forwards reverse`;
        } else if(disableSliding) {
            slidesRefs.current.forEach((key, i) => {
                if(i === prevSlide) {
                    key.style.animation = '';
                    void key.offsetWidth;
                    key.style.animation = `sliderItemPrevOpacity ${animationDuration}s forwards`;
                    key.style.zIndex = 100;
                } else if (i === currentSlide) {
                    key.style.animation = '';
                    void key.offsetWidth;
                    key.style.animation = `sliderItemPrevOpacity 0s forwards reverse`;
                    key.style.zIndex = 90;
                } else {
                    key.style.animation = '';
                    key.style.zIndex = 0;
                }
            });
        }

        const handleMouseDown = (e) => {
            mouseDownPos.current = e.clientX;
        };

        const handleMouseUp = () => {
            if(mouseDownPos.current - mouseMovePos.current > document.documentElement.clientWidth * 0.3) {
                handleUpdateSlide(currentSlide + 1 > slidesRefs.current.length - 1 ? 0 : currentSlide + 1);
            }
            if(mouseMovePos.current - mouseDownPos.current > document.documentElement.clientWidth * 0.3) {
                handleUpdateSlide(currentSlide - 1 < 0 ? slidesRefs.current.length - 1 : currentSlide - 1);
            }
            mouseDownPos.current = null;
        };

        const handleMouseMove = (e) => {
            mouseMovePos.current = e.clientX;
        };

        const handleKeyDown = (e) => {
            if(!disableKeyboard.current) {
                if(e.code === 'ArrowRight') {
                    handleUpdateSlide(currentSlide + 1 > slidesRefs.current.length - 1 ? 0 : currentSlide + 1);
                }

                if(e.code === 'ArrowLeft') {
                    handleUpdateSlide(currentSlide - 1 < 0 ? slidesRefs.current.length - 1 : currentSlide - 1);
                }
            }
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timer);
        };
    }, [currentSlide, prevSlide, disableSliding, handleUpdateSlide]);

    return (
        <div className="slider">
            {props.slides.map((key, i) => {
                return (
                    <div key={i}
                        ref={el => slidesRefs.current[i] = el}
                        className="slider-item"
                        style={{
                            backgroundImage: `url(${key})`,
                        }}
                    />
                );
            })}
            <div className="slider__dots">
                {props.slides.map((_, i) => {
                    return (
                        <button key={i}
                                onClick={() => handleUpdateSlide(i)}
                                className={'slider__dots-item' + (i === currentSlide ? ' active' : '')}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;