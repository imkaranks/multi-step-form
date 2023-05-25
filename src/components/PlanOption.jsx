import React from 'react';
import { formatPrice } from '../utils/helper';

function PlanOption({ id, name, imgURL, price, isYearly, handleClick, isActive }) {
  return (
    <div
      className={`basis-full cursor-pointer flex gap-4 sm:gap-8 sm:flex-col sm:items-start p-4 border ${isActive ? 'border-blue-purplish bg-magnolia' : 'border-gray-light'} hover:border-blue-purplish rounded-lg`}
      tabIndex='0'
      onClick={() => handleClick(id, name, (isYearly ? price.yearly : price.monthly))}
    >
      <img src={imgURL} alt="" role='image' />
      <div>
        <h2 className='text-blue-marine font-medium'>{name}</h2>
        <p className='text-gray-cool'>{formatPrice((isYearly ? price.yearly : price.monthly), isYearly)}</p>
        {isYearly && <p className='text-sm text-blue-marine font-medium'>2 months free</p>}
      </div>
    </div>
  );
}

export default PlanOption;