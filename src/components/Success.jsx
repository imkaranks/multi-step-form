import React from 'react';
import successIcon from '../assets/images/icon-thank-you.svg';

function Success() {
  return (
    <div className='text-center p-4'>
      <img
        src={successIcon}
        alt='' /* # left empty as it is decoration asset # */
        role='image'
        className='mx-auto'
      />
      <h1 className='text-3xl font-bold text-blue-marine mt-6'>Thank you!</h1>
      <p className='text-gray-cool max-w-[55ch] mx-auto mt-4'>
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export default Success;