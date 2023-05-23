import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [ currentStep, setCurrentStep ] = useState(1);
  const [ details, setDetails ] = useState({
    name: '',
    email: '',
    phone: '',
    isYearly: false,
    plan: {},
    addOns: []
  });
  console.log(details);

  return (
    <div className='w-full max-w-5xl min-h-[80vh] mx-auto flex flex-col rounded-xl sm:w-11/12 sm:bg-white sm:shadow-lg sm:flex-row sm:p-2'>
      <Sidebar
        step={currentStep}
      />
      <Main
        step={currentStep}
        handleStep={setCurrentStep}
        details={details}
        updateDetails={setDetails}
      />
    </div>
  );
}

export default App;