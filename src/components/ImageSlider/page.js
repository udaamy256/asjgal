"use client";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = ["/hero-bg.jpg", "/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* Optional Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-600" : "bg-white opacity-70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
