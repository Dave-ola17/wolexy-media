import React from 'react';
import Popup from '@/components/Popup';
import Tab from '@/components/Tab';
import Image from 'next/image';
import BackgroundSlider from '@/components/BackgroundSlider'


const Page = () => {
 
  return (
    <div className='  h-full overflow-auto'>
      {/* <header className=" bg-transparent fixed w-full z-10 top-0 flex justify-between items-center h-[90px] px-6 ">
         <div>
          <Image  
            width={100}
            height={100}
            src='/LMEDIA LOGO2.PNG'
            alt='Company Logo'
          />
         </div>
        <div className=' rounded-3xl text-stone-900 px-3 py-2 hover:bg-opacity-90'>
          <Popup />          
        </div>
        
      </header> */}
      <main className="relative">
        <div className="absolute top-0 left-0 w-full bg-transparent flex flex-row justify-between items-center p-4 z-30">
          <div>
            <Image src="/LMEDIA LOGO2.PNG" width={100} height={100} alt="LifeEasy Logo" />
          </div>
          <ul className="  flex flex-row justify-between gap-4">
            <li className="text-gray-800 text-gray-50 cursor-pointer ">Gallery</li>
            <li className="text-gray-800 text-gray-50 cursor-pointer ">Contact us</li>
            <li className="text-gray-800 text-gray-50 cursor-pointer ">About us</li>
          </ul>
        </div>
        <BackgroundSlider />
        <Tab />
      </main>
      <footer className=' h-[60px] flex justify-center items-center'>
        <h2>Wolexy  Media</h2>
      </footer>
    </div>
  );
};

export default Page;
