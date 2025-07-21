import React from 'react'

export const Hero = () => {
  return (
    <div className="px-[80px] py-[50px] mt-32 max-w-[1000px] m-auto">
      <div className="text-[12px] font-semibold max-w-[400px] rounded-full bg-[#e4e8f4] px-3 py-2 w-fit mx-auto border border-[#d1cdcd] flex items-center justify-center hover:bg-[#e5e5e5] transition-colors duration-200 ease-out">
        <span>Private. Secure. Available 24/7.</span>
        <svg width="16" height="16" fill="none" className="ml-1">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>

      <h1 className="mt-[50px] text-[62px] font-medium tracking-[-0.6px] leading-[1.1] text-center text-[#232222] text-shadow-md">
        Your AI-Powered Mental Health Companion
      </h1>

      <p className="text-[16px] text-[#5b5a5a] leading-[27px] text-center max-w-[540px] mx-auto mt-[15px]">
        Talk to a trained AI therapist anytime you need support. No waiting rooms, no judgments — just thoughtful, personalized conversations.
      </p>

      <div className="flex justify-center mt-[20px] gap-[10px]">
        <button className="text-[14px] font-semibold px-4 py-3 bg-blue-500 rounded-[7px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer [text-shadow:0px_0.5px_1px_rgba(0,0,0,0.25)]">
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
    </div>
  );
};
