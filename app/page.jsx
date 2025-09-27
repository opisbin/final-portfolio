"use client";

import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4 , duration: 0.4,ease: "easeIn" },
      }}
    >
      home
    </motion.section>
  )
}

export default Home