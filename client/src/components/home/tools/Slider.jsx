import React, { useState, useEffect } from 'react';
// import analyst from '../../../image/one.jpeg';
// import analyst from '../../../image/analyte.png'
// import taxImage from '../../../image/Tax-apply.png'
// import payment from '../../../image/Tax-Payment.png'
// import register from '../../../image/register.png'
import './Slideshow.css';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex % 4) + 1);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const plusSlides = (n) => {
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + n;
        if (newIndex > 4) {
          newIndex = 1;
        } else if (newIndex < 1) {
          newIndex = 4;
        }
        return newIndex;
      });
    };
  
    const currentSlide = (n) => {
      setSlideIndex(n);
    };

  return (
    <div className="slideshow-container">
      <div className="mySlides sliderOne fade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
        {/* <img src={analyst}/> */}
        {/* <div className="text">Caption Text</div> */}
      </div>

      {/* <div className="mySlides sliderTwo fade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
        <img src={taxImage}/>
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides sliderThree fade" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
        <img src={payment}/>
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides sliderFour fade" style={{ display: slideIndex === 4 ? 'block' : 'none' }}>
        <img src={register}/>
        <div className="text">Caption Text</div>
      </div> */}

      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>
    </div>
  );
}

export default Slider;
