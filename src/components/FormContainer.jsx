import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { enterSideway } from '../utils/variants';
import { Link, Navigate } from 'react-router-dom';

function FormContainer({ title, desc, handleSubmit, children, prevRoute, nextRoute }) {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to={nextRoute} />
  }
  return (
    <form
      className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-8 py-10 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'
      onSubmit={(e) => {
        e.preventDefault();
        if (handleSubmit()) {
          setRedirect(true);
        }
      }}
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
          prevRoute && (
            <Link to={prevRoute} className='font-medium px-6 py-2 border-none text-gray-cool rounded-lg hover:text-blue-marine'>Go Back</Link>
          )
        }
        <button
          type='submit'
          className={`font-medium px-6 py-2 border-none bg-blue-marine text-white rounded-lg hover:bg-blue-purplish ${!prevRoute ? 'ml-auto' : ''}`}
        >
          Next Step
        </button>
      </div>
    </form>
  );
}

export default FormContainer;