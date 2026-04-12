import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      {/* <div className='w-full h-[2px] mb-12 bg-yellow-400'></div> */}
      <div className="max-w-6xl pt-12 mx-auto flex flex-col lg:flex-row lg:justify-around gap-10 lg:gap-8">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-yellow-400 font-bold text-3xl mb-2">Techno I Force</h1>
          <p className="text-gray-400 text-sm text-center lg:text-left">
            Empowering Automotive & Packaging Solutions
          </p>
          <div className="flex mt-4 gap-3 text-gray-400 [&>*]:hover:text-yellow-400 transition">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <Link to={'/'} className="text-gray-400 hover:cursor-pointer hover:text-yellow-400 transition mb-2">Home</Link>
          <Link to={'/products'} className="text-gray-400 hover:cursor-pointer hover:text-yellow-400 transition mb-2">Products</Link>
          <Link to={'/contact'} className="text-gray-400 hover:cursor-pointer hover:text-yellow-400 transition">Contact Us</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
          <div className="text-center lg:text-left">
            <p className="text-gray-400 mb-2">UAE: +971564840532 / +971503448668</p>
            <p className="text-gray-400 mb-2">Pakistan: +923435230886</p>
          </div>
          <p className="text-gray-400 mb-2">Email: techno.iforce@gmail.com</p>
          

          <p className="text-gray-400 text-center lg:text-left">
            Al Dam, Al Mali, Al Quoz 3 Bur Office 106
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2026 Techno I Force. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer