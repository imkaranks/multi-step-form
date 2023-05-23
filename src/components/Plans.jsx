import React, { useState } from 'react';
import Header from './Header';
import arcadeIcon from '../assets/images/icon-arcade.svg'
import adventureIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import Button from './Button';
import './Plans.css';

function Plans({ updateStep, details, updateDetails }) {
  const { subscription } = details;
  const [ hasArcade, setHasArcade ] = useState(subscription?.name === 'Arcade');
  const [ hasAdvance, setHasAdvance ] = useState(subscription?.name === 'Advance');
  const [ hasPro, setHasPro ] = useState(subscription?.name === 'Pro');
  const [ isYearly, setIsYearly ] = useState(details.isYearly);

  function proceedNext() {
    updateStep(3);
    if (subscription?.name && !(hasArcade || hasAdvance || hasPro)) {
      updateDetails(prev => ({
        ...prev,
        subscription,
        isYearly
      }));
    } else if (hasArcade) {
      updateDetails(prev => ({
        ...prev,
        subscription: {name: 'Arcade', price: isYearly ? '$90/yr': '$9/mo'},
        isYearly
      }));
    } else if (hasAdvance) {
      updateDetails(prev => ({
        ...prev,
        subscription: {name: 'Advanced', price: isYearly ? '$120/yr': '$12/mo'},
        isYearly
      }));
    } else if (hasPro) {
      updateDetails(prev => ({
        ...prev,
        subscription: {name: 'Pro', price: isYearly ? '$150/yr': '$15/mo'},
        isYearly
      }));
    }
  }

  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Select your subscription'
        desc='You have the option of monthly or yearly billing.'
      />
      <div className="flex flex-col gap-2 mt-8 sm:flex-row">
        <div
          className={`basis-full cursor-pointer flex gap-4 sm:gap-8 sm:flex-col sm:items-start p-4 border ${hasArcade ? 'border-blue-purplish bg-magnolia' : 'border-gray-light'} hover:border-blue-purplish rounded-lg`}
          onClick={() => {
            setHasArcade(prevState => !prevState);
            setHasAdvance(false);
            setHasPro(false);
          }}
        >
          <img src={arcadeIcon} alt='' role='image' />
          <div>
            <h2 className='text-blue-marine font-medium'>Arcade</h2>
            <p>{isYearly ? '$90/yr': '$9/mo'}</p>
          </div>
        </div>

        <div
          className={`basis-full cursor-pointer flex gap-4 sm:gap-8 sm:flex-col sm:items-start p-4 border ${hasAdvance ? 'border-blue-purplish bg-magnolia' : 'border-gray-light'} hover:border-blue-purplish rounded-lg`}
          onClick={() => {
            setHasAdvance(prevState => !prevState);
            setHasPro(false);
            setHasArcade(false);
          }}
        >
          <img src={adventureIcon} alt='' role='image' />
          <div>
            <h2 className='text-blue-marine font-medium'>Advanced</h2>
            <p>{isYearly ? '$120/yr': '$12/mo'}</p>
          </div>
        </div>

        <div
          className={`basis-full cursor-pointer flex gap-4 sm:gap-8 sm:flex-col sm:items-start p-4 border ${hasPro ? 'border-blue-purplish bg-magnolia' : 'border-gray-light'} hover:border-blue-purplish rounded-lg`}
          onClick={() => {
            setHasPro(prevState => !prevState);
            setHasArcade(false);
            setHasAdvance(false);
          }}
        >
          <img src={proIcon} alt='' role='image' />
          <div>
            <h2 className='text-blue-marine font-medium'>Pro</h2>
            <p>{isYearly ? '$150/yr': '$15/mo'}</p>
          </div>
        </div>
      </div>
      <div className='bg-magnolia flex gap-4 justify-center items-center p-2 mt-8 rounded-lg'>
        <span className="text-blue-marine font-medium">Monthly {!isYearly && <span className="sr-only">(Subscription Selected)</span>}</span>
        <label htmlFor="isMonthly" className='sr-only'>Subscription</label>
        <input
          type="checkbox"
          name="subscription"
          id="subscription"
          className='toggle'
          onChange={(ev) => setIsYearly(ev.target.checked)}
          checked={isYearly}
        />
        <span className="text-blue-marine font-medium">Yearly {isYearly && <span className="sr-only">(Subscription Selected)</span>}</span>
      </div>
      
      <div className='fixed left-0 right-0 bottom-0 flex items-center justify-between p-4 bg-white sm:mt-auto sm:static sm:p-0'>
        <Button
          text='Go Back'
          onClick={() => updateStep(1)}
        />
        <Button
          type='primary'
          text='Next Step'
          onClick={proceedNext}
        />
      </div>
    </div>
  );
}

export default Plans;