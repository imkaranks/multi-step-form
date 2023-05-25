import React from 'react';
import Step from './Step';

function Sidebar({ step }) {
  const styles = {
    '--mobile': 'url(/bg-sidebar-mobile.svg)',
    '--desktop': 'url(/bg-sidebar-desktop.svg)'
  }

  return (
    <aside className='bg-[image:var(--mobile)] bg-cover bg-bottom bg-no-repeat pt-8 pb-24 sm:bg-[image:var(--desktop)] sm:p-4 sm:flex-[0.3] sm:rounded-xl' style={styles}>
      <div>
        <ol className='flex justify-center gap-4 sm:flex-col'>
          <li>
            <Step
              count={1}
              desc='Your info'
              isActive={step === 1}
            />
          </li>
          <li>
            <Step
              count={2}
              desc='Select plan'
              isActive={step === 2}
            />
          </li>
          <li>
            <Step
              count={3}
              desc='Add-ons'
              isActive={step === 3}
            />
          </li>
          <li>
            <Step
              count={4}
              desc='Summary'
              isActive={step === 4 || step === 5}
            />
          </li>
        </ol>
      </div>
    </aside>
  );
}

export default Sidebar;