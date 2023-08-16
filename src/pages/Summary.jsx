import React, { useContext } from 'react';
import { formatPrice } from '../utils/helper';
import { motion } from 'framer-motion';
import { enterSideway } from '../utils/variants';
import { FormContext } from '../context/FormContext';
import { Link } from 'react-router-dom';

function Summary() {
  const { details } = useContext(FormContext);
  const { isYearly, addOns, subscription: { name, price } } = details;
  const total = parseInt(price) + addOns.reduce((acc, addOn) => {
    return acc + parseInt(addOn?.price ?? 0);
  }, 0);

  return (
    <motion.section
      className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-8 py-10 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'
      variants={enterSideway}
      initial="hidden"
      animate="show"
    >
      <motion.header
        className='flex flex-col gap-2'
        initial="hidden"
        whileInView="show"
        transition={{staggerChildren: 0.1, delayChildren: 0.2}}
      >
        <motion.h1
          className='text-blue-marine text-3xl font-bold'
          variants={enterSideway}
        >Finishing up</motion.h1>
        <motion.p
          className='text-gray-cool'
          variants={enterSideway}
        >Double-check everything looks OK before confirming.</motion.p>
      </motion.header>

      <div className="bg-alabester p-4 mt-8 rounded-lg">
        <div className='flex items-center justify-between'>
          <div>
            <h2 className="text-blue-marine font-medium">
              {name} <span>({isYearly ? 'Yearly' : 'Monthly'})</span>
            </h2>
            <Link to='/plans' className='bg-transparent border-none text-blue-pastel underline hover:text-blue-purplish'>Change</Link>
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
        <Link to='/addons' className='font-medium px-6 py-2 border-none text-gray-cool rounded-lg hover:text-blue-marine'>Go Back</Link>
        <Link to='/success' className='font-medium px-6 py-2 border-none bg-blue-marine text-white rounded-lg hover:bg-blue-purplish'>Confirm</Link>
      </div>
    </motion.section>
  );
}

export default Summary;