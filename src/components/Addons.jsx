import React, { useState } from 'react';
import FormContainer from './FormContainer';
import { formatPrice, hyphenate } from '../utils/helper';

function Addons({ updateStep, details, updateDetails, addOnsDb }) {
  const { isYearly } = details;
  const initialState = {};
  addOnsDb.forEach(({ name }, id) => {
    initialState[name] = details.addOns[id]?.name ? true : false;
  })
  const [ checked, setChecked ] = useState(initialState);

  function handleSubmit(ev) {
    ev.preventDefault();
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
    <FormContainer
      title='Pick add-ons'
      desc='Add-ons help enhance your gaming experience.'
      updateStep={updateStep}
      handleSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-4 mt-8 mb-20 sm:mb-0'>
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
                style={{'accentColor': 'hsl(243, 100%, 62%)'}}
              />
              <label htmlFor={hyphenate(name)} className='flex-1 flex flex-col'>
                <span className='text-blue-marine font-medium'>{name}</span>
                <span className='text-gray-cool'>{desc}</span>
              </label>
              <p className='text-blue-purplish font-medium'>+{formatPrice((details.isYearly ? yearly : monthly), details.isYearly)}</p>
            </div>
          ))
        }
      </div>
    </FormContainer>
  )
}

export default Addons;