import React from 'react';
import Step from './Step';

function Sidebar({ step, handleStep }) {
  return (
    <aside className='bg-[url(./src/assets/images/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat pt-8 pb-20 sm:p-4 sm:bg-[url(./src/assets/images/bg-sidebar-desktop.svg)] sm:flex-[0.3] sm:rounded-xl'>
      <div className=''>
        <ol className='flex justify-center gap-4 sm:flex-col'>
          <li
            onClick={() => handleStep(1)}
          >
            <Step
              count={1}
              desc='Your info'
              isActive={step === 1}
            />
          </li>
          <li
            onClick={() => handleStep(2)}
          >
            <Step
              count={2}
              desc='Select plan'
              isActive={step === 2}
            />
          </li>
          <li
            onClick={() => handleStep(3)}
          >
            <Step
              count={3}
              desc='Add-ons'
              isActive={step === 3}
            />
          </li>
          <li
            onClick={() => handleStep(4)}
          >
            <Step
              count={4}
              desc='Summary'
              isActive={step === 4}
            />
          </li>
        </ol>
      </div>
    </aside>
  );
}

export default Sidebar;