"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import images from './images';

const imageSources = images.map((img) => {
  return(
    img.src
  )
})
const interval = 3000; // interval for image transition (in milliseconds)

function BackgroundSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, interval);

  }, []);


  return (
    <div className="relative w-screen h-screen">
      <Image
        className="object-cover w-full transition duration-3000 ease-in-out h-full"
        src={imageSources[currentImageIndex]}
        alt="Background Image"
        layout="fill"
        objectFit='cover'
      />
      <div className="absolute  inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-white text-center from-neutral-500 text-[40px] md:text-[60px] font-thin ">LIFEEZY PHOTOGRAPHY</h2>
        <h4 className=" text-white text-center from-neutral-500 text-[20px] font-mono ">Elegant & Exquisite</h4>
      </div>
    </div>
  );
}

export default BackgroundSlider;
