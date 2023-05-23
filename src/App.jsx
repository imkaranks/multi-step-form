import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className='w-full max-w-5xl min-h-[80vh] mx-auto flex flex-col rounded-xl sm:w-11/12 sm:bg-white sm:shadow-lg sm:flex-row sm:p-2'>
      <Sidebar
        step={currentStep}
        handleStep={setCurrentStep}
      />
      <Main
        step={currentStep}
      />
    </div>
  );
}

export default App;