'use client'
import Image from 'next/image';
import React from 'react'
import {motion} from "motion/react"

export const Hero = () => {
  return (
    <motion.div
      initial={{opacity:0, x: -20 }}
            animate={{opacity:1, x:0}}
            transition={{duration:0.6}}
            
    className="px-[80px] py-[10px] mt-24 max-w-[1500px] m-auto">
      
      <div className="text-[12px] font-semibold max-w-[400px] rounded-full   px-3 py-1 w-fit mx-auto border border-[#d1cdcd] flex items-center justify-center  transition-colors duration-200 ease-out">
        <span>Private. Secure. Available 24/7.</span>
        <svg width="16" height="16" fill="none" className="ml-1">
          <path
            stroke="#B2BEB5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>

      <h1 className="mt-[20px] text-[72px] font-medium tracking-[-0.6px] leading-[1.1] text-center bg-gradient-to-b from-[#232222] to-[#444242] dark:text-gray-200 bg-clip-text text-transparent text-shadow-md flex gap-5">
       
        Your Personal AI-Powered <br /> Mental Health Companion
        
      </h1> 

      <p className="text-[16px] text-[#5b5a5a] leading-[27px] text-center max-w-[540px] mx-auto mt-[15px] dark:text-gray-500">
        Talk to a trained AI therapist anytime you need support. No waiting rooms, no judgments — just thoughtful, personalized conversations.
      </p>

      <div className="flex justify-center mt-[20px] gap-[10px]">
        <button className="text-[14px] font-semibold px-4 py-3 bg-[#8B004B] hover:opacity-90 transiiton-all duration-300 rounded-[7px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer [text-shadow:0px_0.5px_1px_rgba(0,0,0,0.25)]">
          Start Your Session
        </button>

        <button className="text-[14px] font-semibold px-4 py-3 bg-gray-100 rounded-[7px] text-black shadow-sm cursor-pointer flex items-center gap-1">
          <span>Learn More</span>
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity=".5"
              strokeWidth="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
