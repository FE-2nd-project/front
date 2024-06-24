import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css"; // CSS 파일을 가져옵니다.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = ["/cat.jpg", "/bab.jpeg", "/park.jpeg"];

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
