import React from 'react';
import Header from './Header';
import Button from './Button';
import { formatPrice } from '../utils/helper';

function Summary({ updateStep, details }) {
  const { isYearly, addOns, subscription: { name, price } } = details;
  const total = parseInt(price) + addOns.reduce((acc, addOn) => {
    return acc + parseInt(addOn?.price ?? 0);
  }, 0);

  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-8 py-10 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Finishing up'
        desc='Double-check everything looks OK before confirming.'
      />

      <div className="bg-alabester p-4 mt-8 rounded-lg">
        <div className='flex items-center justify-between'>
          <div>
            <h2 className="text-blue-marine font-medium">
              {name} <span>({isYearly ? 'Yearly' : 'Monthly'})</span>
            </h2>
            <button
              className='bg-transparent border-none text-blue-pastel underline hover:text-blue-purplish'
              aria-label='Change subscription'
              onClick={() => updateStep(2)}
            >
              Change
            </button>
          </div>
          <p>{formatPrice(price, isYearly)}</p>
        </div>

        <hr className='border-t border-t-gray-light my-4' />

        {
          addOns.map((addOn, id) => {
            if (addOn) {
              return (
                <div key={id} className='flex items-center justify-between text-sm'>
                  <h2 className="text-gray-cool">
                    {addOn.name}
                  </h2>
                  <p className='text-blue-marine font-medium'>+{formatPrice(addOn.price, isYearly)}</p>
                </div>
              )
            }
          })
        }
        <div className='flex items-center justify-between'>
          <h2 className="text-sm text-gray-cool">
            Total (per {isYearly ? 'year' : 'month'})
          </h2>
          <p className='text-lg text-blue-purplish font-bold'>+{formatPrice(total, isYearly)}</p>
        </div>
      </div>

      <div className='fixed left-0 right-0 bottom-0 flex items-center justify-between p-4 bg-white sm:mt-auto sm:static sm:p-0'>
        <Button
          text='Go Back'
          onClick={() => updateStep(prev => prev - 1)}
        />
        <Button
          type='primary'
          text='Confirm'
          onClick={() => updateStep(prev => prev + 1)}
        />
      </div>
    </div>
  );
}

export default Summary;