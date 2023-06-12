import React, { useState } from 'react';
import { formatPrice } from '../utils/helper';

function PlanOption({ id, name, imgURL, price, isYearly, handleClick, isActive }) {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div
      className={`relative basis-full cursor-pointer p-4 border ${isActive ? 'border-blue-purplish bg-magnolia' : 'border-gray-light'} hover:border-blue-purplish rounded-lg`}
      onClick={() => handleClick(id, name, (isYearly ? price.yearly : price.monthly))}
    >
      <input
        type="radio"
        name="plan"
        id={name}
        className='appearance-none absolute inset-0 opacity-0'
      />
      <label htmlFor={name} className='flex gap-4 sm:gap-8 sm:flex-col sm:items-start'>
        <div className={`bg-magnolia rounded-full w-10 h-10 aspect-square ${imgLoading && 'animate-pulse'}`}>
          <img
            src={imgURL}
            alt=''
            role='image'
            className={`${imgLoading && 'hidden'}`}
            onLoad={() => setImgLoading(false)}
          />
        </div>
        <div>
          <h2 className='text-blue-marine font-medium'>{name}</h2>
          <p className='text-gray-cool'>{formatPrice((isYearly ? price.yearly : price.monthly), isYearly)}</p>
          {isYearly && <p className='text-sm text-blue-marine font-medium'>2 months free</p>}
        </div>
      </label>
    </div>
  );
}

export default PlanOption;