import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { enterSideway } from '../utils/variants';

function FormContainer({ title, desc, updateStep, handleSubmit, children }) {
  return (
    <form
      className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-8 py-10 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'
      onSubmit={handleSubmit}
    >
      <fieldset>
        <motion.div
          className='flex flex-col gap-2'
          initial="hidden"
          whileInView="show"
          transition={{staggerChildren: 0.1, delayChildren: 0.2}}
        >
          <motion.legend
            className='text-blue-marine text-3xl font-bold'
            variants={enterSideway}
          >{title}</motion.legend>
          <motion.p
            className='text-gray-cool'
            variants={enterSideway}
          >{desc}</motion.p>
        </motion.div>
        {children}
      </fieldset>

      <div className='fixed left-0 right-0 bottom-0 flex items-center justify-between p-4 bg-white sm:mt-auto sm:static sm:p-0'>
        {
          updateStep && (
            <Button
              text='Go Back'
              onClick={() => updateStep(prev => prev - 1)}
            />
          )
        }
        <Button
          type='primary'
          text='Next Step'
          css={!updateStep ? 'ml-auto' : ''}
        />
      </div>
    </form>
  );
}

export default FormContainer;