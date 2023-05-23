import React from 'react';
import Personal from './Personal';
import Plans from './Plans';
import Addons from './Addons';
import Summary from './Summary';
import Success from './Success';

function Main({ step, handleStep, details, updateDetails }) {
  return (
    <main className='sm:flex-[0.7]'>
      {
        step === 1
        ? (
          <Personal
            handleStep={handleStep}
            updateDetails={updateDetails}
          />
        ) : step === 2
        ? (
          <Plans
            handleStep={handleStep}
            details={details}
            updateDetails={updateDetails}
          />
        ) : step === 3
        ? (
          <Addons
            handleStep={handleStep}
            details={details}
            updateDetails={updateDetails}
          />
        ) : step === 4
        ? (
          <Summary
            handleStep={handleStep}
            details={details}
          />
        ) : <Success />
      }
    </main>
  );
}

export default Main;