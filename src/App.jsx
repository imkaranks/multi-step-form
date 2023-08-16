import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { FormContextProvider } from './context/FormContext';
import Personal from './pages/Personal';
import Plans from './pages/Plans';
import Addons from './pages/Addons';
import Summary from './pages/Summary';
import Success from './pages/Success';
import { plans, addons } from './data/data.json'

function App() {
  return (
    <FormContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Personal />} />
          <Route path='plans' element={<Plans plansDb={plans} />} />
          <Route path='addons' element={<Addons addOnsDb={addons} />} />
          <Route path='summary' element={<Summary />} />
          <Route path='success' element={<Success />} />
        </Route>
      </Routes>
    </FormContextProvider>
  );
}

export default App;