import Popup from '@/components/Popup';
import React from 'react';
import Tab from '@/components/Tab';


const Page = () => {
 
  return (
    <div className=' flex flex-col h-full bg-right-bottom bg-no-repeat bg-cover' style={{ backgroundImage: `url('/bg.jpg')`, backgroundSize: 'auto' }}>
      <header className=" flex justify-between items-center h-[90px] px-6 ">
         <div>Wolexy Media</div>
        <div className=' rounded-3xl text-stone-900 px-3 py-2 hover:bg-opacity-90'>
          <Popup />
        </div>
        
      </header>
      <main className=' grow'>
        <Tab />
      </main>
      <footer className=' h-[60px] flex justify-center items-center'>
        <h2>Wolexy  Media</h2>
      </footer>
    </div>
  );
};

export default Page;
