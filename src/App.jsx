import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import FormContext from './context/FormContext';

function App() {
  const [ currentStep, setCurrentStep ] = useState(1);
  const [ details, setDetails ] = useState({
    name: '',
    email: '',
    phone: '',
    isYearly: false,
    subscription: {},
    addOns: []
  });

  return (
    <FormContext.Provider value={{
      step: currentStep,
      updateStep: setCurrentStep,
      details,
      updateDetails: setDetails
    }}>
      <div className='w-full max-w-5xl min-h-[80vh] mx-auto flex flex-col rounded-xl sm:w-11/12 sm:bg-white sm:shadow-lg sm:flex-row sm:p-2'>
        <Sidebar />
        <Main />
      </div>
    </FormContext.Provider>
  );
}

export default App;