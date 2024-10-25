import React from 'react';
import Image1 from "/src/assets/Hero/image1.png";
import Image2 from "/src/assets/Hero/image2.jpg";
import Image3 from "/src/assets/Hero/image3.jpg";
import Image4 from "/src/assets/Hero/image4.png";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Much more than just a generic vision",
    description: "Integrated Precision",
  },
  {
    id: 2,
    img: Image2,
  },
  {
    id: 3,
    img: Image3,
  },
  {
    id: 4,
    img: Image4,
  },
];

const Hero = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    dotsClass: "slick-dots custom-dots",
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative overflow-hidden bg-slate-400">
      {/* Hero Section */}
      <Slider ref={sliderRef} {...settings}>
        {ImageList.map((data) => (
          <div key={data.id} className="relative">
            {/* image section */}
            <div className="relative z-0">
              <img
                src={data.img}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>

            {/* text content section */}
            <div className="absolute right-0 top-1/4 sm:top-1/3 z-10 text-white p-4 sm:p-8">
              <h1 className="text-lg sm:text-2xl font-bold text-right">
                {data.title}
              </h1>
              <p className="text-3xl sm:text-5xl font-bold text-right lg:text-7xl   ">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button onClick={prevSlide} className="bg-primary text-white p-2 rounded-full">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button onClick={nextSlide} className="bg-primary text-white p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
