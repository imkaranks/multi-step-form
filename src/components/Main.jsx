import React, { useContext } from 'react';
import Personal from './Personal';
import Plans from './Plans';
import Addons from './Addons';
import Summary from './Summary';
import Success from './Success';
import data from '../data/data.json';
import FormContext from '../context/FormContext';

function Main() {
  const { plans, addons } = data;
  const { step } = useContext(FormContext);

  return (
    <main className='sm:flex-[0.7]'>
      {
        step === 1
        ? (
          <Personal />
        ) : step === 2
        ? (
          <Plans plansDb={plans} />
        ) : step === 3
        ? (
          <Addons addOnsDb={addons} />
        ) : step === 4
        ? (
          <Summary />
        ) : <Success />
      }
    </main>
  );
}

export default Main;