import React from 'react';
import Personal from './Personal';
import Plans from './Plans';
import Addons from './Addons';
import Summary from './Summary';
import Success from './Success';
import data from '../data/data.json'

function Main({ step, updateStep, details, updateDetails }) {
  const { plans, addons } = data;

  return (
    <main className='sm:flex-[0.7]'>
      {
        step === 1
        ? (
          <Personal
            updateStep={updateStep}
            updateDetails={updateDetails}
          />
        ) : step === 2
        ? (
          <Plans
            updateStep={updateStep}
            details={details}
            updateDetails={updateDetails}
            plansDb={plans}
          />
        ) : step === 3
        ? (
          <Addons
            updateStep={updateStep}
            details={details}
            updateDetails={updateDetails}
            addOnsDb={addons}
          />
        ) : step === 4
        ? (
          <Summary
            updateStep={updateStep}
            details={details}
          />
        ) : <Success />
      }
    </main>
  );
}

export default Main;