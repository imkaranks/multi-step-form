import React from 'react';
import Header from './Header';
import arcadeIcon from '../assets/images/icon-arcade.svg'
import adventureIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import Button from './Button';
import './Plans.css';

function Plans() {
  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Select your plan'
        desc='You have the option of monthly or yearly billing.'
      />
      <div className="flex flex-col gap-2 mt-8 sm:flex-row">
        <div className="basis-full flex gap-4 sm:gap-8 sm:flex-col sm:items-start p-4 border border-gray-light rounded-lg">
          <img src={arcadeIcon} alt='' role='image' />
          <div>
            <h2 className='text-blue-marine font-medium'>Arcade</h2>
            <p>$9/mo</p>
          </div>
        </div>

        <div className="basis-full flex gap-4 sm:gap-8 sm:flex-col sm:items-start p-4 border border-gray-light rounded-lg">
          <img src={adventureIcon} alt='' role='image' />
          <div>
            <h2 className='text-blue-marine font-medium'>Advanced</h2>
            <p>$12/mo</p>
          </div>
        </div>

        <div className="basis-full flex gap-4 sm:gap-8 sm:flex-col sm:items-start p-4 border border-gray-light rounded-lg">
          <img src={proIcon} alt='' role='image' />
          <div>
            <h2 className='text-blue-marine font-medium'>Pro</h2>
            <p>$15/mo</p>
          </div>
        </div>
      </div>
      <div className='bg-magnolia flex gap-4 justify-center items-center p-2 mt-8 rounded-lg'>
        <span className="text-blue-marine font-medium">Monthly</span>
        <label htmlFor="isMonthly" className='sr-only'>Monthly Plan</label>
        <input
          type="checkbox"
          name="isMonthly"
          id="isMonthly"
          className='toggle'
        />
        <span className="text-blue-marine font-medium">Yearly</span>
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

export default Plans;