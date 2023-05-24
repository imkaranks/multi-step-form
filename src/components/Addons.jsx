import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';

function Addons({ updateStep, details, updateDetails }) {
  const { isYearly, addOns } = details;
  const [ hasOnlineService, setHasOnlineService ] = useState(addOns[0]?.name ? true : false);
  const [ hasMoreStorage, setHasMoreStorage ] = useState(addOns[1]?.name ? true : false);
  const [ hasCustomization, setHasCustomization ] = useState(addOns[2]?.name ? true : false);

  function proceedNext() {
    updateStep(prev => prev + 1);
    const addOns = [
      {
        name: hasOnlineService ? 'Online Service' : null,
        price: isYearly ? '$10/yr' : '$1/mo'
      },
      {
        name: hasMoreStorage ? 'Larger Storage' : null,
        price: isYearly ? '$20/yr' : '$2/mo'
      },
      {
        name: hasCustomization ? 'Customizable' : null,
        price: isYearly ? '$20/yr' : '$2/mo'
      }
    ];
    updateDetails(prev => ({...prev, addOns}))
  }

  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Pick add-ons'
        desc='Add-ons help enhance your gaming experience.'
      />

      <div className='flex flex-col gap-4 mt-8'>
        <div className='flex items-center gap-4 border border-gray-light p-4 rounded-lg'>
          <input
            type="checkbox"
            name="online-service"
            id="online-service"
            onChange={(ev) => setHasOnlineService(ev.target.checked)}
            checked={hasOnlineService}
          />
          <label htmlFor="" className='flex-1 flex flex-col'>
            <span className='text-blue-marine font-medium'>Online service</span>
            <span className='text-gray-cool'>Access to multiplayer games</span>
          </label>
          <p className='text-blue-purplish font-medium'>+{details.isYearly ? '$10/yr' : '$1/mo'}</p>
        </div>

        <div className='flex items-center gap-4 border border-gray-light p-4 rounded-lg'>
            <input
            type="checkbox"
            name="more-storage"
            id="more-storage"
            onChange={(ev) => setHasMoreStorage(ev.target.checked)}
            checked={hasMoreStorage}
          />
          <label htmlFor="" className='flex-1 flex flex-col'>
            <span className='text-blue-marine font-medium'>Larger storage</span>
            <span className='text-gray-cool'>Extra 1TB of cloud save</span>
          </label>
          <p className='text-blue-purplish font-medium'>+{details.isYearly ? '$20/yr' : '$2/mo'}</p>
        </div>

        <div className='flex items-center gap-4 border border-gray-light p-4 rounded-lg'>
          <input
            type="checkbox"
            name="customizable"
            id="customizable"
            onChange={(ev) => setHasCustomization(ev.target.checked)}
            checked={hasCustomization}
          />
          <label htmlFor="" className='flex-1 flex flex-col'>
            <span className='text-blue-marine font-medium'>Customizable Profile</span>
            <span className='text-gray-cool'>Custom theme on your profile</span>
          </label>
          <p className='text-blue-purplish font-medium'>+{details.isYearly ? '$20/yr' : '$2/mo'}</p>
        </div>
      </div>

      <div className='fixed left-0 right-0 bottom-0 flex items-center justify-between p-4 bg-white sm:mt-auto sm:static sm:p-0'>
        <Button
          text='Go Back'
          onClick={() => updateStep(prev => prev - 1)}
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

export default Addons;