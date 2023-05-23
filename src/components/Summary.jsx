import React from 'react';
import Header from './Header';
import Button from './Button';

function Summary({ details }) {
  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Finishing up'
        desc='Double-check everything looks OK before confirming.'
      />

      <div className="bg-alabester p-4 mt-8 rounded-lg">
        <div className='flex items-center justify-between'>
          <div>
            <h2 className="text-blue-marine font-medium">
              {details.plan.name} <span>({details.isYearly ? 'Yearly' : 'Monthly'})</span>
            </h2>
            <button className='bg-transparent border-none text-blue-purplish underline' aria-label='Change Plan'>Change</button>
          </div>
          <p>{details.plan.price}</p>
        </div>

        <hr className='border-t border-t-gray-light my-4' />

        {
          details.addOns.map((addOn, id) => {
            if (addOn.name) {
              return (
                <div className='flex items-center justify-between'>
                  <h2 className="text-blue-marine font-medium">
                    {addOn.name}
                  </h2>
                  <p>{addOn.price}</p>
                </div>
              )
            }
          })
        }
      </div>

      <div className='fixed left-0 right-0 bottom-0 flex items-center justify-between p-4 bg-white sm:mt-auto sm:static sm:p-0'>
        <Button
          text='Go Back'
        />
        <Button
          type='primary'
          text='Confirm'
        />
      </div>
    </div>
  );
}

export default Summary;