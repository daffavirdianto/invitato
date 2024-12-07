import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../assets/images/Slideshow-Cover-1.jpg';
import image2 from '../assets/images/Slideshow-Cover-2.jpg';
import image3 from '../assets/images/Slideshow-Cover-3.jpg';
import image4 from '../assets/images/Slideshow-Cover-4.jpg';
import image5 from '../assets/images/Slideshow-Cover-5.jpg';

const Carousel = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];
        

    return (
        <Slide slidesToScroll={1} slidesToShow={1}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default Carousel;