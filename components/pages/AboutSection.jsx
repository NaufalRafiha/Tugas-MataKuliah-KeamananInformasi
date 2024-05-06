/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Button from '../core/Button'
import Link from 'next/link'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className='w-full min-h-full'>
      <div className="relative w-full h-[100vh] flex flex-col lg:flex-row lg:justify-evenly items-center my-10">
        <div className="absolute w-full h-[100vh] bg-gradient-to-l from-violet-950 to-gray-900" />
        <div className="p-14 lg:p-0 z-[1]">
          <motion.div 
            className="relative w-[326px] h-[503px] p-20 lg:p-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image src="/image/profile.jpg" alt="profile" fill="true" className='rounded-xl'/>
          </motion.div>
        </div>
        <div className="space-y-3 z-[1] gap-6">
          <motion.div 
            className="text-indigo-500 text-[32px] font-semibold"
            initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.9,delay:0.5}}
          >About Me</motion.div>
          <motion.div 
            className="w-[416px] text-neutral-100 text-lg font-normal leading-[27px] text-justify"
            initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.9,delay:0.5}}
          >A passionate oriented UI/UX & Frontend Engineer with one year of experience and a strong focus on front-end development. Have a good sense of team work, camaraderie, enjoy working closely with team members to ensure workloads are effective, and talking about new challenge. I invested a 2 hours per days to learn new languages while sharpening existing skills.</motion.div>
          <motion.div
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.9,delay:0.5}}
          >
            <Link href="#footer">
              <Button title="More About Me?"/>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
