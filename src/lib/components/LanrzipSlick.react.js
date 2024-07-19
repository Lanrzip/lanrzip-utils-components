import React from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LanrzipSlick = (props) => {
    let {
        id,
        children,
        className,
        accessibility,
        adaptiveHeight,
        arrows,
        asNavFor,
        autoplay,
        autoplaySpeed,
        centerMode,
        centerPadding,
        dots,
        dotsClass,
        draggable,
        easing,
        fade,
        focusOnSelect,
        infinite,
        initialSlide,
        lazyLoad,
        pauseOnDotsHover,
        pauseOnFocus,
        pauseOnHover,
        responsive,
        rows,
        rtl,
        slide,
        slidesPerRow,
        slidesToScroll,
        slidesToShow,
        speed,
        swipe,
        swipeToSlide,
        touchMove,
        touchThreshold,
        useCSS,
        useTransform,
        variableWidth,
        vertical,
        setProps,
    } = props;

    return (
        <>
            <Slider
                id={id}
                className={className}
                accessibility={accessibility}
                adaptiveHeight={adaptiveHeight}
                arrows={arrows}
                asNavFor={asNavFor}
                autoplay={autoplay}
                autoplaySpeed={autoplaySpeed}
                centerMode={centerMode}
                centerPadding={centerPadding}
                dots={dots}
                dotsClass={dotsClass}
                draggable={draggable}
                easing={easing}
                fade={fade}
                focusOnSelect={focusOnSelect}
                infinite={infinite}
                initialSlide={initialSlide}
                lazyLoad={lazyLoad}
                pauseOnDotsHover={pauseOnDotsHover}
                pauseOnFocus={pauseOnFocus}
                pauseOnHover={pauseOnHover}
                responsive={responsive}
                rows={rows}
                rtl={rtl}
                slide={slide}
                slidesPerRow={slidesPerRow}
                slidesToScroll={slidesToScroll}
                slidesToShow={slidesToShow}
                speed={speed}
                swipe={swipe}
                swipeToSlide={swipeToSlide}
                touchMove={touchMove}
                touchThreshold={touchThreshold}
                useCSS={useCSS}
                useTransform={useTransform}
                variableWidth={variableWidth}
                vertical={vertical}
            >
                {children}
            </Slider>
        </>
    );
}

LanrzipSlick.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    accessibility: PropTypes.bool,
    adaptiveHeight: PropTypes.bool,
    arrows: PropTypes.bool,
    asNavFor: PropTypes.object,
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    centerMode: PropTypes.bool,
    centerPadding: PropTypes.string,
    dots: PropTypes.bool,
    dotsClass: PropTypes.string,
    draggable: PropTypes.bool,
    easing: PropTypes.string,
    fade: PropTypes.bool,
    focusOnSelect: PropTypes.bool,
    infinite: PropTypes.bool,
    initialSlide: PropTypes.number,
    lazyLoad: PropTypes.oneOf(['ondemand', 'progressive']),
    pauseOnDotsHover: PropTypes.bool,
    pauseOnFocus: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    responsive: PropTypes.array,
    rows: PropTypes.number,
    rtl: PropTypes.bool,
    slide: PropTypes.string,
    slidesPerRow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    slidesToShow: PropTypes.number,
    speed: PropTypes.number,
    swipe: PropTypes.bool,
    swipeToSlide: PropTypes.bool,
    touchMove: PropTypes.bool,
    touchThreshold: PropTypes.number,
    useCSS: PropTypes.bool,
    useTransform: PropTypes.bool,
    variableWidth: PropTypes.bool,
    vertical: PropTypes.bool,
    setProps: PropTypes.func
}

LanrzipSlick.defaultProps = {
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    dots: true,
    draggable: true,
    easing: 'linear',
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: null,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    responsive: null,
    rows: 1,
    rtl: false,
    slide: 'div',
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false
}

export default LanrzipSlick;
