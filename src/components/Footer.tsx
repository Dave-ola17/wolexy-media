import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center md:text-block text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="underline text-yellow-500 decoration-solid underline-offset-8 text-2xl font-serif ">Contact Us</h3>
            <p>Email: ademuyiwanur81@gmail.com</p>
            <p>Phone: +234 816 156 2003</p>
            <p>Address: F.U.T Gidankwano, Minna. </p>
          </div>
          <div className="col-span-1">
            <h3 className="underline decoration-solid text-yellow-500 underline-offset-8 text-2xl font-serif ">Quick Links</h3>
            <ul className="mt-4">
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="underline text-yellow-500 decoration-solid underline-offset-8 text-2xl font-serif ">Follow Us</h3>
            <div className="flex  mt-4 space-x-4">
              <div>
                <FaWhatsapp size={30} />  
                <a href="https://wa.me/qr/X6KE7UFVXSZEA1" className="text-white hover:text-black"></a>
              </div>
              <div>
                <FaInstagram size={30} />
                <a href="https://instagram.com/lifeezy_media?igshid=MzMyNGUyNmU2YQ==" className="text-white hover:textblack"></a>
              </div>
              <div>
                <FaLinkedin size={30} />
                <a 
                href="https://www.linkedin.com/in/adewole-ademuyiwa-17b81a266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-white hover:text-black"></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
export default Footer;