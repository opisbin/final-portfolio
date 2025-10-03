"use client";
import { motion } from 'framer-motion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';

import {HiOutlineMapPin, HiOutlineArrowLongRight} from "react-icons/hi2"
import {HiOutlinePhone, HiOutlineMail} from "react-icons/hi"

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4 , duration: 0.4,ease: "easeIn" },
      }}
      className='h-screen flex items-center py-24 xl:py-0'
    >
      <div className='container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible'>
        <div className='w-full'>
          <div className='flex flex-col xl:flex-row gap-6'>
            {/* info text */}
            <div className='flex-1 xl:w-[600px] flex flex-col gap-12'>
              <div>
                <h2 className='h2 mb-6'>
                  Get in <span className='text-accent'>Touch</span>
                </h2>
                <p className='max-w-[460px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
              </div>
              {/* contact info */}
              <div className='flex flex-col gap-8 mb-6 xl:mb-0'>
                {/* Phone */}
                <div className='flex items-center gap-4 text-lg'>
                  <span className='text-accent'>
                    <HiOutlinePhone className='text-2xl' />
                  </span>
                  <span>+880 162 976 5922</span>
                </div>
                {/* Email */}
                <div className='flex items-center gap-4 text-lg'>
                  <span className='text-accent'>
                    <HiOutlineMail className='text-2xl' />
                  </span>
                  <span>meherabh016@gmail.com</span>
                </div>
                {/* Location */}
                <div className='flex items-center gap-4 text-lg'>
                  <span className='text-accent'>
                    <HiOutlineMapPin className='text-2xl' />
                  </span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className='flex-1'>
              <form className='flex flex-col gap-6 items-start'>
                {/* first and last name */}
                <div className='flex flex-col xl:flex-row gap-6 w-full'>
                  <div className='w-full'>
                    <Label htmlFor='name'>
                      First Name <span className='text-accent'>*</span>
                    </Label>
                    <Input
                    id='firstname'
                    name='firstname'
                    placeholder='First Name'
                    required />
                  </div>
                  <div className='w-full'>
                    <Label htmlFor='name'>
                      Last Name <span className='text-accent'>*</span>
                    </Label>
                    <Input
                    id='lastname'
                    name='lastname'
                    placeholder='Last Name'
                    required />
                </div>
                </div>
                {/* email */}
                <div className='w-full'>
                    <Label htmlFor='email'>
                      Email <span className='text-accent'>*</span>
                    </Label>
                    <Input
                    id='email'
                    name='email'
                    placeholder='your@email.com'
                    required />
                </div>
                {/* Select */}
                <div className='w-full'>
                     <Label htmlFor='email'>I'm interested in <span className='text-accent'>*</span></Label>
                     <Select name='service' required>
                       <SelectTrigger
                        id='service'
                        className='w-full !h-12 bg-white/5 border-white/10 px-4'>
                         <SelectValue placeholder='Select a service' />
                       </SelectTrigger>
                       <SelectContent className="bg-black border-white/20">
                        <SelectItem value='fronend'>Front End Development</SelectItem>
                        <SelectItem value='uiux'>UI & UX Design</SelectItem>
                        <SelectItem value='backend'>Back End Development</SelectItem>
                      </SelectContent>
                     </Select>
                </div>
                {/* text area */}
                <div className='w-full'>
                  <Label htmlFor='message'>
                      Message <span className='text-accent'>*</span>
                  </Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Type your message here...'
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    required
                  />
                </div>
                {/* submit button */}
                <button className='btn btn-lg btn-accent'>
                  <div className='flex items-center gap-3'>
                    <span className='font-medium'>Send Message</span>
                    <HiOutlineArrowLongRight className='text-xl' />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
