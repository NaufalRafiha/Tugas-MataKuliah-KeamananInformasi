import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="fixed flex w-full h-[72px] justify-between items-center bg-[#181824] z-10"> 
        <div className="relative flex w-[70px] h-[70px] mx-10">
          <Image src="/image/logo-nav.png" alt="logo" fill={true} className='invert' />
        </div>
        <div className="flex h-auto gap-6 mx-10">
          <Link className="hover:text-theme-primary hover:scale-100 hover:duration-500" href="#home">
            Home
          </Link>
          <Link className="hover:text-theme-primary hover:scale-100 hover:duration-500" href="#project">
            Project
          </Link>
          <Link className="hover:text-theme-primary hover:scale-100 hover:duration-500" href="#about">
            About
          </Link>
          <Link className="hover:text-theme-primary hover:scale-100 hover:duration-500" href="#footer">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar
Navbar