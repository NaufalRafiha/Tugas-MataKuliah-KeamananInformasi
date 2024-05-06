import Image from "next/image";
import Link from "next/link";
import {BsInstagram, BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs"
import { MdPlace, MdEmail } from "react-icons/md"


const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-[#181824] w-full h-[289px] flex justify-between items-center">
        <div className="relative flex items-center w-[150px] h-[150px]">
          <Image src="/image/logo-footer.png" alt="logo" fill={true} className="invert" />
        </div>
      <div className="flex flex-col h-full justify-between items-center py-8">
        <div className="flex flex-col">
          <p>Reach me on social media :</p>
          <div className="flex gap-6 justify-center py-4">
            <Link href="https://www.instagram.com/nflrafii">
              <BsInstagram size={25}/>
            </Link>
            <Link href="#">
              <BsLinkedin size={25}/>
            </Link>
            <Link href="#">
              <BsGithub size={25}/>
            </Link>
          </div>
        </div>
        <div>
          Made with ❤️ | Copyright 2024 Naufal Rafi Hanifan
        </div>
      </div>
      <div className="flex flex-col justify-center mx-8 gap-3">
        <p className="text-lg font-semibold">Get in Touch</p>
        <div className="flex  items-center gap-4">
          <MdPlace size={20}/>
          <p>Cikoneng, Ciamis, Tasikmalaya</p>
        </div>
        <div className="flex  items-center gap-4">
          <BsFillTelephoneFill size={20}/>
          <p>082114444402</p>
        </div>
        <div className="flex  items-center gap-4">
          <MdEmail size={20}/>
          <p>nrafi30317@gmail.com</p>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Footer
Footer