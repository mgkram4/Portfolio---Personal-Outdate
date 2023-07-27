"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image1 from "public/IMG_2167.jpg";
import image2 from "public/IMG_2168.jpg";
import image3 from "public/IMG_2169.jpg";
import image4 from "public/IMG_2166.jpg";
import image5 from "public/IMG_2170.jpg";
import Image from "next/image";

function App() {
  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[980px] w-full m-auto py-8 px-4 relative group">
      <div className="relative w-full h-64 sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
        <Image
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 transform -translate-y-1/2 left-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 transform -translate-y-1/2 right-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex mt-4 justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 mx-1 rounded-full ${
              slideIndex === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
