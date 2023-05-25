import React, { useEffect, useState } from 'react';
import Header from './Header';
import Button from './Button';
import PlanOption from './PlanOption';
import './Plans.css';

function Plans({ updateStep, details, updateDetails, plansDb }) {
  const { subscription } = details;
  const [ isYearly, setIsYearly ] = useState(details.isYearly);
  const [ activeId, setActiveId ] = useState(subscription?.id ?? null);
  const [ activePlan, setActivePlan ] = useState({});

  function proceedNext() {
    updateStep(prev => prev + 1);
    updateDetails(prev => ({
      ...prev,
      isYearly,
      subscription: activePlan
    }));
  }

  function handleClick(index, _name, _price) {
    setActiveId(index);
    setActivePlan({
      id: index,
      name: _name,
      price: _price
    });
  }

  useEffect(() => {
    if (Object.keys(subscription).length) {
      setActivePlan(subscription);
    }
  }, []);

  useEffect(() => {
    if (activeId !== null) {
      const activeSubsc = plansDb[activeId];
      setActivePlan(prev => ({
        ...prev,
        price: isYearly ? activeSubsc.price.yearly : activeSubsc.price.monthly
      }));
    }
  }, [isYearly]);

  return (
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Select your plan'
        desc='You have the option of monthly or yearly billing.'
      />
      <div className="flex flex-col gap-2 mt-8 sm:flex-row">
        {
          plansDb.map((plan, id) => (
            <PlanOption
              key={id}
              {...plan}
              handleClick={handleClick}
              isYearly={isYearly}
              isActive={activeId === id}
            />
          ))
        }
      </div>
      <div className='bg-magnolia flex gap-4 justify-center items-center p-2 mt-8 rounded-lg'>
        <span className="text-blue-marine font-medium">Monthly {!isYearly && <span className="sr-only">(Subscription Selected)</span>}</span>
        <label htmlFor="subscription" className='sr-only'>Subscription</label>
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

export default Plans;