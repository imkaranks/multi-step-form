import React, { useEffect, useState } from 'react';
import Header from './Header';
import Button from './Button';
import { formatPrice, hyphenate } from '../utils/helper';

function Addons({ updateStep, details, updateDetails, addOnsDb }) {
  const { isYearly } = details;
  const initialState = {};
  addOnsDb.forEach(({ name }, id) => {
    initialState[name] = details.addOns[id]?.name ? true : false;
  })
  const [ checked, setChecked ] = useState(initialState);

  function proceedNext() {
    updateStep(prev => prev + 1);
    const keys = Object.keys(checked).filter(key => checked[key]);
    const addOns = addOnsDb.map(({name, price}) => {
      if (keys.some(key => name === key)) {
        return {
          name,
          price: isYearly ? price.yearly : price.monthly
        };
      }
    });
    updateDetails(prev => ({...prev, addOns}));
  }

  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Pick add-ons'
        desc='Add-ons help enhance your gaming experience.'
      />

      <form>
        <fieldset className='flex flex-col gap-4 mt-8'>
          <legend className='sr-only'>Addons</legend>
          {
            addOnsDb.map(({ name, desc, price: {yearly, monthly} }, id) => (
              <div key={id} className='flex items-center gap-4 border border-gray-light p-4 rounded-lg'>
                <input
                  type="checkbox"
                  name={hyphenate(name)}
                  id={hyphenate(name)}
                  onChange={(ev) => setChecked(prev => ({
                    ...prev,
                    [name]: ev.target.checked
                  }))}
                  checked={checked[name]}
                />
                <label htmlFor={hyphenate(name)} className='flex-1 flex flex-col'>
                  <span className='text-blue-marine font-medium'>{name}</span>
                  <span className='text-gray-cool'>{desc}</span>
                </label>
                <p className='text-blue-purplish font-medium'>+{formatPrice((details.isYearly ? yearly : monthly), details.isYearly)}</p>
              </div>
            ))
          }
        </fieldset>
      </form>

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