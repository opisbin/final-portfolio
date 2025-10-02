"use client";

import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

// Components
import Stats from '@/components/stats';
import Testimonial from '@/components/Testimonial';
import Info from '@/components/Info';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import Blob from '@/components/Blob';
import Socials from '@/components/Socials';


const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4 , duration: 0.4,ease: "easeIn" },
      }}
      className='h-screen flex items-center'
    >
      <div className='container mx-auto px-0'>
        <div className='flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]'>
          {/* Image & Social Icons */}
          <div className='hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative'>
            <Image
              src="/assets/anime.png"
              width={320}
              height={496}
              className='z-20 relative'
              alt='anime'
           />

            {/* Overlay */}
            <div className='w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30'></div>
            {/* blob */}
            <div className='absolute top-[80px] -left-[80px] z-10'>
              <Blob containerStyle="w-[420px] h-[420px]"/>
            </div>

            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px] mt-[20px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>


          {/* Scroll Area */}
          <ScrollArea className='w-full h-[680px]'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-2 h-2 bg-accent rounded-full'></div>
                <p>About me.</p>
              </div>
              <h2 className='h2 mb-6'>
                <span className='text-accent'>Meherab</span> Hossain
              </h2>
              <p className='max-w-[540px] mb-12'>
                I'm a passionate web developer and designer with a knack for creating visually appealing and user-friendly websites. With a strong foundation in React Next.js Typescript JavaScript and other Framework and Libraries, I bring ideas to life on the web.
              </p>

              <div className='flex flex-col items-start gap-16'>
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  )
}

export default About