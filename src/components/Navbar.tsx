"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
  const [navbar, setNavbar ] = useState(false)
  const [navscroll, setNavscroll ] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > window.innerHeight){
          setNavscroll(true);
        }else{
          setNavscroll(false);
        };     
      }
      window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll)
        };   
    }, [])
  return (
    <div>
        <nav className={` ${navscroll ? 'bg-black ' : 'bg-transparent'} transition duration-1000 w-full  fixed top-0 left-0 right-0 z-10 `}>
          <div className=' justify-between mx-auto px-4 lg:max-w-7xl md:items-center md:flex md:px-8 '>
            <div>
              <div className=' flex items-center justify-between py-3 md:py-5 md:block '>
                <Link href="/">
                    <Image src="/LMEDIA LOGO2.PNG" width={100} height={100} alt="LifeEasy Logo" />
                </Link>
                <div className=' md:hidden '>
                  <button className=' p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 ' onClick={() => setNavbar(!navbar)}>
                    {
                      navbar ? (                        
                        <AiOutlineClose className=" text-yellow-500 focus:border-none  " width={30} height={30} alt="Close Menu" />
                      ): (
                        <AiOutlineMenu className=" text-yellow-500 focus:border-none  " width={30} height={30} alt="Menu" />
                      )
                    }
                  </button>
                </div>
              </div>
            </div>
            <div 
              className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 mt-0 
              ${navbar ? 'pb-12 md:p-0 block': 'hidden'}`}>
                <ul className=' h-screen md:h-auto items-center justify-end md:flex '> 
                  <li className='pb-6 text-md items-center text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent'> 
                    <Link className='font-mono text-lg' href='/gallery' onClick={() => setNavbar(!navbar)}>
                      Gallery
                    </Link>
                  </li>
                  <li className='pb-6 text-md items-center text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent'> 
                    <Link className='font-mono text-lg' href='#about' onClick={() => setNavbar(!navbar)}>
                      About Us
                    </Link>
                  </li>
                  <li className='pb-6 text-md items-center text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent'> 
                    <Link className='font-mono text-lg' href='#contact' onClick={() => setNavbar(!navbar)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar