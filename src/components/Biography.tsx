import React from 'react';
import Image from 'next/image';

const Biography = () => {
  return (
    <div id="about" className="mt-10 mx-5 md:mx-0">
      <div className="text-center">
        <h3 className="mx-10 text-yellow-500 underline decoration-solid underline-offset-8 text-2xl font-serif">
          ABOUT THE AUTHOR
        </h3>
      </div>
      <div className="md:container mt-10 md:flex md:gap-10 justify-center items-center">
        <div className="md:flex-1 text-center items-center">
          <Image
            className="border-none mx-auto rounded-md"
            src="/wolexy/wolexyImage4.jpg"
            alt="Image of our CEO"
            width={400}
            height={400}
          />
        </div>
        <div className="md:flex-1  my-10 md:mx-0">
          <h5 className="font-mono text-lg md:text-[20px]">
            Hi, I am Ademuyiwa Adewole. Lead photographer here at LIFEEZY Photography.
            I specialize in Portrait, Corporate, Fashion, and Weddings Photography.
            I love connecting with people and helping them tell beautiful stories through photographs.
            I like to build genuine connections with my clients while taking timeless photographs of them.
            I am capable of making your special moments last forever...yeah, that is one of my superpowers.
            I consider myself a minimalist; simplicity and elegance do it for me every time.
            I love good food; anything that involves exploring new good food, I am in!
            I believe in the expression of individual uniqueness and originality, even more,
            I love to capture it in photographs. Authenticity, Simplicity, and Elegance are some of my
            favorite words to live by.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Biography;
