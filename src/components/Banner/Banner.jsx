import React from 'react';
import bannerImg from "../../assets/portfolio/banner-img.png"
import { Typewriter } from "react-simple-typewriter";
// import { motion } from "motion/react";

const Banner = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-32'>
                <div className=''>
                    <h1 className='text-7xl bg-gradient-to-r from-[#2B7FFF]  to-[#DAB2FF] 
                     bg-clip-text text-transparent w-fit font-bold italic pb-2'>Rubaiya Tahamim </h1>
                     <h1 className='text-7xl bg-gradient-to-r from-[#2B7FFF]  to-[#DAB2FF]
                     bg-clip-text text-transparent w-fit font-bold italic mb-5'>Orovi</h1>

               
          <p className="max-w-xl italic font-light text-[#2B7FFF]">
            <Typewriter
              words={[
                "Hey, I’m Orovi. I like to create eye-catching designs & turn them into code.",
                "I love learning new technologies and building stuff that helps people.",
                "I research unknown things & collect knowledge.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={25}
              delaySpeed={1500}
            />
          </p>
                </div>
                <div>
                    <img className='w-2xl' src={bannerImg} alt="not found" />
                </div>
               
            </div>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
             <h1>hh</h1>
        </div>
    );
};

export default Banner;