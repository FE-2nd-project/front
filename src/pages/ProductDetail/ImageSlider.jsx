import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevIcon from "./chevron-left.svg";
import NextIcon from "./chevron-right.svg";

const ImageSlider = ({ images }) => {
  const sliderRef = React.useRef(null);
  if (!Array.isArray(images)) {
    // Handle the case where images is not an array (e.g., convert or display an error)
    console.error("`images` prop is not an array:", images);
    return null; // or handle error state
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 다음 슬라이드 이동
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // 이전 슬라이드 이동
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // const images = ["/hat.jpg", "/hat.jpg", "/hat.jpg"];

  return (
    <div className="image-slider-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      {/* 버튼을 사진 위에 띄우기 */}
      <button className="slider-button prev" onClick={prevSlide}>
        <img src={prevIcon} alt="이전" className="slider-button-icon" />
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        <img src={NextIcon} alt="다음" className="slider-button-icon" />
      </button>
    </div>
  );
};

export default ImageSlider;
