import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { formatPrice, hyphenate } from '../utils/helper';
import { FormContext } from '../context/FormContext';
import { motion } from "framer-motion";
import { enterSideway } from "../utils/variants";

function Addons({ addOnsDb }) {
  const { details, updateDetails } = useContext(FormContext);
  const { isYearly } = details;
  const initialState = {};
  addOnsDb.forEach(({ name }, id) => {
    initialState[name] = details.addOns[id]?.name ? true : false;
  })
  const [ checked, setChecked ] = useState(initialState);

  function handleSubmit() {
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
    return true;
  }

  return (
    <FormContainer
      title='Pick add-ons'
      desc='Add-ons help enhance your gaming experience.'
      handleSubmit={handleSubmit}
      prevRoute='/plans'
      nextRoute='/summary'
    >
      <motion.div
        className='flex flex-col gap-4 mt-8 mb-20 sm:mb-0'
        variants={enterSideway}
        initial="hidden"
        animate="show"
      >
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
      </motion.div>
    </FormContainer>
  )
}

export default Addons;