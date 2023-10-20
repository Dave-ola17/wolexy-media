import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import MyTabs from '@/components/Tab'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'


const page = () => {
  return (
    <div>
        <div className="bg-black">
            <Navbar />
        </div>
        <div className=' pt-[70px]'>
            <div className=' flex justify-end my-10 mr-10'>
                <button className=' absolute  px-2 py-1 my-auto border flex flex-row gap-2 border-orange-500 hover:bg-red-300 hover:text-gray-50 transition duration-1000 rounded-md  '>
                    <AiOutlineArrowLeft className='my-auto' size={20} />
                    <Link href="/">Back</Link>           
                </button>
            </div>        
            <header className=' flex justify-center mt-5 '> 
                <h2 className=' underline text-orange-500 decoration-solid underline-offset-8 text-2xl font-serif'>OUR GALLERY</h2>
            </header>
            <main>
                <MyTabs />
                <Footer />
            </main>
        </div>
    </div>
  )
}

export default page