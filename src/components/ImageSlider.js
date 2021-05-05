import React, {useState} from 'react';
import {SliderData} from './SliderData';
import imgLeft from './image/iconfinder_multimedia-04_2849832.png'
import imgRight from './image/iconfinder_multimedia-03_2849833.png'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <img src={imgLeft} alt="" className='left-arrow' onClick={prevSlide}/>
            <img src={imgRight}  alt="" className='right-arrow' onClick={nextSlide}/>

            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='travel image' className='image'/>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;
