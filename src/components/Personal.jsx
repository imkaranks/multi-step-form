import React from 'react';
import Header from './Header';
import Button from './Button';

function Personal() {
  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Personal info'
        desc='Please provide your name, email address, and phone number.'
      />
      <form className='flex flex-col gap-4 mt-8'>
        <div className="flex flex-col">
          <label htmlFor="fullname" className='text-blue-marine font-medium'>Name</label>
          <input
            type="text"
            name='fullname'
            id='fullname'
            className="px-4 py-2 border border-gray-cool"
            placeholder='e.g. Stephen King'
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className='text-blue-marine font-medium'>Email Address</label>
          <input
            type="email"
            name='email'
            id='email'
            className="px-4 py-2 border border-gray-cool"
            placeholder='e.g. stephenking@lorem.com'
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className='text-blue-marine font-medium'>Phone Number</label>
          <input
            type="tel"
            name='phone'
            id='phone'
            className="px-4 py-2 border border-gray-cool"
            placeholder='e.g. +1 234 567 890'
          />
        </div>
      </form>

      <div className="fixed left-0 right-0 bottom-0 flex justify-end items-center p-4 bg-white sm:mt-auto sm:static sm:p-0">
        <Button
          type='primary'
          text='Next Step'
        />
      </div>
    </div>
  );
}

export default Personal;