import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
import PlanOption from '../components/PlanOption';
import FormContainer from '../components/FormContainer';
import { motion } from "framer-motion";
import { enterSideway } from "../utils/variants";
import './Plans.css';

function Plans({ plansDb }) {
  const { details, updateDetails } = useContext(FormContext);
  const { subscription } = details;
  const [ isYearly, setIsYearly ] = useState(details.isYearly);
  const [ activeId, setActiveId ] = useState(subscription?.id ?? null);
  const [ activePlan, setActivePlan ] = useState({});

  function handleSubmit() {
    if (Object.keys(activePlan).length) {
      updateDetails(prev => ({
        ...prev,
        isYearly,
        subscription: activePlan
      }));
      return true;
    }
    return false;
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
    <FormContainer
      title='Select your plan'
      desc='You have the option of monthly or yearly billing.'
      handleSubmit={handleSubmit}
      prevRoute='/'
      nextRoute='/addons'
    >
      <motion.div
        role='radiogroup'
        className="flex flex-col gap-2 mt-8 sm:flex-row"
        variants={enterSideway}
        initial="hidden"
        animate="show"
      >
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
      </motion.div>
      <motion.div
        className='bg-magnolia flex gap-4 justify-center items-center p-2 mt-8 mb-20 sm:mb-0 rounded-lg'
        variants={enterSideway}
        initial="hidden"
        animate="show"
      >
        <span className={`${!isYearly ? 'text-blue-marine' : 'text-gray-cool'} font-medium`}>Monthly {!isYearly && <span className="sr-only">(Subscription Selected)</span>}</span>
        <label htmlFor="subscription" className='sr-only'>Subscription</label>
        <input
          type="checkbox"
          name="subscription"
          id="subscription"
          className='toggle'
          onChange={(ev) => setIsYearly(ev.target.checked)}
          checked={isYearly}
        />
        <span className={`${isYearly ? 'text-blue-marine' : 'text-gray-cool'} font-medium`}>Yearly {isYearly && <span className="sr-only">(Subscription Selected)</span>}</span>
      </motion.div>
    </FormContainer>
  )
}

export default Plans;