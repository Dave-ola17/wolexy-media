import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center md:text-block text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p>Email: contact@lifeezyphotography.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Main Street, City</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex items-center mt-4 space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
export default Footer;