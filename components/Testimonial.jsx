"use client";

// import swiper react components

import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper core and required modules
import { Autoplay } from 'swiper/modules';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {ImQuotesLeft} from 'react-icons/im'

// data

const testimonial = [
    {
        message: "Meherab is an exceptional web developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.",
        name: "John Doe",
    },
    {
        message: "Meherab is a pleasure to work with. He is always open to feedback and goes above and beyond to ensure client satisfaction.",
        name: "Jane Smith",
    },
    {
        message: "Meherab's technical skills are top-notch. He is able to tackle complex challenges with ease and delivers results on time.",
        name: "Alice Johnson",
    },
]
const Testimonial = () => {
  return (
    <Swiper
        // modules={[Autoplay]}
        loop={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }} className='w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg'>
            {testimonial.map((person, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='flex px-8 py-6 gap-8'>
                            <ImQuotesLeft className='hidden xl:flex text-8xl text-accent'/>
                            <div className='flex flex-col gap-2'>
                                <p>{person.message}</p>
                                <p className='self-end text-accent font-semibold'>{person.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
    </Swiper>
  )
}

export default Testimonial