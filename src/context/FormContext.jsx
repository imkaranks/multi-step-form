import { createContext, useState } from "react";

export const FormContext = createContext(null);

export function FormContextProvider({ children }) {
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
      details,
      updateDetails: setDetails
    }}>
      {children}
    </FormContext.Provider>
  )
}