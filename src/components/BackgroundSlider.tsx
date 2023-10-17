"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const imageSources = ['/wolexy/image1.jpg', '/wolexy/sharon4.jpg',  '/wolexy/image2.jpg', '/wolexy/image3.jpg', '/wolexy/john.jpg', '/wolexy/sharon 2.jpg'];
const interval = 5000; // interval for image transition (in milliseconds)

function BackgroundSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, interval);

  }, []);


  return (
    <div className="relative w-screen h-screen">
      {/* Use the Image component for the background */}
      <Image
        className="object-cover w-full h-full"
        src={imageSources[currentImageIndex]}
        alt="Background Image"
        layout="fill"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-white font-bold">LIFEEZY PHOTOGRAPHY</h2>
      </div>
    </div>
  );
}

export default BackgroundSlider;
