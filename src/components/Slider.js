import Slider from 'react-infinite-logo-slider';

export default function SliderWrapper({images, duration}) {
    return (<div className='slider-wrapper'>
            <Slider
                duration={duration}
            >
                {images.map((image, index) => (
                    <Slider.Slide key={index}>
                        <img src={image} className='slider-image'/>
                    </Slider.Slide>
                ))}
                
            </Slider>
    </div>)
}              
                     