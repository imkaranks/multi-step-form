import React from 'react';
import Header from './Header';
import Button from './Button';

function Addons() {
  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Pick add-ons'
        desc='Add-ons help enhance your gaming experience.'
      />

      <div className='flex flex-col gap-4 mt-8'>
        <div className='flex items-center gap-4 border border-gray-light p-4 rounded-lg'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className='flex-1 flex flex-col'>
            <span className='text-blue-marine font-medium'>Online service</span>
            <span className='text-gray-cool'>Access to multiplayer games</span>
          </label>
          <p className='text-blue-purplish font-medium'>+$1/mo</p>
        </div>

        <div className='flex items-center gap-4 border border-gray-light p-4 rounded-lg'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className='flex-1 flex flex-col'>
            <span className='text-blue-marine font-medium'>Larger storage</span>
            <span className='text-gray-cool'>Extra 1TB of cloud save</span>
          </label>
          <p className='text-blue-purplish font-medium'>+$2/mo</p>
        </div>

        <div className='flex items-center gap-4 border border-gray-light p-4 rounded-lg'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className='flex-1 flex flex-col'>
            <span className='text-blue-marine font-medium'>Customizable Profile</span>
            <span className='text-gray-cool'>Custom theme on your profile</span>
          </label>
          <p className='text-blue-purplish font-medium'>+$2/mo</p>
        </div>
      </div>

      <div className='fixed left-0 right-0 bottom-0 flex items-center justify-between p-4 bg-white sm:mt-auto sm:static sm:p-0'>
      <Button
          text='Go Back'
        />
        <Button
          type='primary'
          text='Next Step'
        />
      </div>
    </div>
  );
}

export default Addons;