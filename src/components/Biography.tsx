import React from 'react'
import Image from 'next/image'


const Biography = () => {
  return (
    <div className=" mt-10 mx-5 md:mx-0 ">
        <div className='text-center'>
            <h3 className=" mx-10 underline decoration-solid underline-offset-8 text-[20px] font-serif ">ABOUT THE AUTHOR</h3>
        </div>
        <div className='md:container mt-10 flex flex-col md:flex-row md:gap-10 justify-around items-center '>
            <div className=" md:col-span-4 ">
                <Image 
                    className=' border-none rounded-md '
                    src='/wolexy/wolexyImage4.jpg'
                    alt='Image of our CEO'
                    width={500}
                    height={500}
                />
            </div>
            <div className=" md:col-span-4 my-10 md:mx-0 ">
                <h5 className=" font-mono text-[17px] ">
                    Hi, I am Ademuyiwa Adewole. Lead photographer here at LIFEEZY Photography. 
                    I specialize in Portrait, Corprate, Fashion and Weddings Photography. 
                    I love connecting with people and helping them tell beautiful stories through photographs. 
                    I like to build genuine connection with my clients while taking timeless photographs of them. 
                    I am capable of making your special moments last forever...yeah that is one of my superpowers. 
                    I consider myself a minimalist, simplicity and elegance does it for me every time. 
                    I love good food, anything that involves exploring new good food, I am in!
                    I believe in the expression of individual uniqueness and originality, even more 
                    I love to capture it in photographs. Authenticity, Simplicity and Elegance are some of my 
                    favorite words to live by.
                </h5>
            </div>
        </div>
    </div>
  )
}

export default Biography