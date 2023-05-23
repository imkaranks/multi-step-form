import React from 'react';
import Personal from './Personal';
import Plans from './Plans';
import Addons from './Addons';
import Summary from './Summary';
import Success from './Success';

function Main({ step }) {
  return (
    <main className='sm:flex-[0.7]'>
      {
        step === 1
        ? <Personal />
        : step === 2
        ? <Plans />
        : step === 3
        ? <Addons />
        : step === 4
        ? <Summary />
        : <Success />
      }
    </main>
  );
}

export default Main;