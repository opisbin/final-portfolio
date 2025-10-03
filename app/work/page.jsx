"use client";

import { motion } from 'framer-motion'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    category: 'frontend',
    title: 'GitHub Random Finder',
    description: 'React + Tailwind GitHub Random Repo Finder',
    image: '/assets/work/tthumb1.png',
    link: '',
    github: '',
    tech: ['React', 'tailwind', 'GitHub API', 'Potter Authentication'],
  },
  {
    id: 2,
    category: 'fullstack',
    title: 'Ai Powered Resume Checker',
    description: 'Next.js + Tailwind AI Resume Checker with Authentication',
    image: '/assets/work/tthumb2.png',
    link: '',
    github: '',
    tech: ['Next.js', 'Tailwind', 'OpenAI API'],
  },
  {
    id: 3,
    category: 'frontend',
    title: 'Developer Portfolio',
    description: 'React + Tailwind Developer Portfolio Website',
    image: '/assets/work/tthumb3.png',
    link: '',
    github: '',
    tech: ['React', 'Tailwind', 'Gsap'],
  },
  {
    id: 4,
    category: 'uiux',
    title: 'ThuthAi Saas Landing Page',
    description: 'Figma UI/UX Design for ThuthAi Saas Landing Page',
    image: '/assets/work/tthumb4.png',
    link: '',
    github: '',
    tech: ['Figma', 'UI/UX Design'],
  },
  {
    id: 5,
    category: 'uiux',
    title: 'PawLand Landing Page',
    description: 'Figma UI/UX Design for PawLand Cat care Landing Page',
    image: '/assets/work/tthumb5.png',
    link: '',
    github: '',
    tech: ['Figma', 'UI/UX Design'],
  },
  {
    id: 6,
    category: 'uiux',
    title: 'futty E-commerce',
    description: 'Figma UI/UX Design for futty Footware E-commerce Website',
    image: '/assets/work/tthumb6.png',
    link: '',
    github: '',
    tech: ['Figma', 'UI/UX Design'],
  }
];

const categories = ['frontend', 'fullstack', 'uiux'];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4 , duration: 0.4,ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work.</span>
        </h2>
        {/* tabs */}
        <Tabs defaultValue="frontend" className="w-full flex flex-col gap-6 xl:gap-12">
          {/* Tab List */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer">
                  {category === 'uiux' ? 'UI/UX Design' : category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* Tab Content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{clickable: true, dynamicBullets: true}}
                    className='h-max xl:h-[460px]'
                  >
                    {projects
                    .filter((project) => project.category === category)
                    .map((project) => {
                      return (
                        <SwiperSlide key={project.id} className="h-full">
                          <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                            {/* Project info */}
                            <div className='w-full max-w-[300px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none'>
                              {/* Project title */}
                              <h3 className='h3'>{project.title}</h3>
                              {/* tech */}
                              <div className='xl:mb-4 max-w-[300px] min-h-[130px]'>
                                <p className='mb-4'>Technologies Used</p>
                                <ul className='flex flex-wrap gap-4'>
                                  {project.tech.map((item, idex) => {
                                    return (
                                      <li
                                      key={idex}
                                      className='flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full'>
                                        {item}
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                              {/* Button */}
                              <div className='flex flex-col sm:flex-row gap-4 items-start'>
                                <Link href={project.link}>
                                  <button className='btn btn-sm btn-accent flex gap-2'>
                                    <MdArrowOutward className='text-sm'/>
                                    <span>Live Project</span>
                                  </button>
                                </Link>
                                <Link href={project.github}>
                                  <button className='btn btn-sm btn-white flex gap-2'>
                                    <FaGithub className='text-xl'/>
                                    <span>GitHub Repo</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            {/* Project Image  */}
                              <div className='w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden xl:ml-10'>
                              <Image
                                src={project.image}
                                alt={project.image}
                                fill
                                className='object-cover'
                              />
                              </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Work