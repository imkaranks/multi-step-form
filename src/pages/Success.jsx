import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import successIcon from '../assets/images/icon-thank-you.svg';
import { motion } from "framer-motion";
import { enterSideway } from "../utils/variants";

function Success() {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <motion.section
      className='w-11/12 max-w-lg mx-auto bg-white text-center -mt-16 rounded-lg shadow-lg px-8 py-20 h-full flex flex-col justify-center sm:shadow-none sm:p-4 sm:mt-0'
      variants={enterSideway}
      initial="hidden"
      animate="show"
    >
      <div className={`bg-magnolia rounded-full w-20 h-20 aspect-square mx-auto ${imgLoading && 'animate-pulse'}`}>
        <img
          src={successIcon}
          alt='' /* # left empty as it is decoration asset # */
          role='image'
          className={`${imgLoading && 'hidden'}`}
          onLoad={() => setImgLoading(false)}
        />
      </div>
      <h1 className='text-3xl font-bold text-blue-marine mt-6'>Thank you!</h1>
      <p className='text-gray-cool max-w-[55ch] mx-auto mt-4'>
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </p>
    </motion.section>
  );
}

export default Success;