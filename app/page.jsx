"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import {MdArrowOutward} from 'react-icons/md'
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi'
import Pattern from '@/components/pattern';

// components
import Blob from '@/components/Blob';
import Image from 'next/image';
import animeImg from '@/public/assets/anime.png';
import Socials from '@/components/Socials';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4 , duration: 0.4,ease: "easeIn" },
      }}
      className='h-screen flex items-center'
    >
      {/* pattern */}
      <Pattern />
      <div className='flex flex-col xl:flex-row items-center justify-between w-full'>

        {/* text */}
        <div className='w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left'>
          <h1 className='h1 flex-1 mb-[28px]'>Hi! I'm Meherab<br />
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Web Designer",
              2000,
            ]}
            wrapper='span'
            speed={40}
            className='text-accent'
            repeat={Infinity}
            cursor={false}
            />
          </h1>
          <p className='max-w-[500px] mb-[44px]'>I design and develop user-friendly interfaces that enhance user experience and drive engagement & satisfaction.
          </p>
          <button className='btn btn-lg btn-accent mb-16'>
            <div className='flex items-center gap-3'>
              <span>Let's talk.</span>
              <MdArrowOutward className='text-xl'/>
            </div>
          </button>
          {/* Contact info */}
          <div className='flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0'>
            {/* Phone */}
            <div className='flex items-center gap-4 text-lg'>
              <span className='text-accent'>
                <HiOutlinePhone className='text-xl' />
              </span>
              <span>+880 162 976 5922</span>
            </div>
            {/* Email */}
            <div className='flex items-center gap-4 text-lg'>
              <span className='text-accent'>
                <HiOutlineMail className='text-xl' />
              </span>
              <span>meherabh016@gmail.com</span>
            </div>
          </div>
          {/* Social Links */}
          <Socials 
          containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2" iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer " />

        </div>

        {/* blob & Image */}
        <div className='hidden xl:block flex-1 relative z-20'>
          {/* Blob */}
          <Blob containerStyle="w-[560px] h-[560px]"/>
          {/* Image */}
          <Image
            src={animeImg}
            alt="Anime"
            width={440}
            height={600}
            className="absolute -top-16 left-[120px]"
          />
          {/* overlay gradient */}
          <div className='w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40'></div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home