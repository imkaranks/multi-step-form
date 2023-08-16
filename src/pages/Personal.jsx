import React, { useEffect, useState, useContext } from 'react';
import FormContainer from '../components/FormContainer';
import { FormContext } from '../context/FormContext';
import { motion } from "framer-motion";
import { enterSideway } from "../utils/variants";

const nameRegex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\d{10}$/;

function Personal() {
  const { details, updateDetails } = useContext(FormContext);
  const [ name, setName ] = useState(details.name);
  const [ isNameValid, setIsNameValid ] = useState(false);
  const [ nameErrMsg, setNameErrMsg ] = useState('');
  const [ email, setEmail ] = useState(details.email);
  const [ isEmailValid, setIsEmailValid ] = useState(false);
  const [ emailErrMsg, setEmailErrMsg ] = useState('');
  const [ phone, setPhone ] = useState(details.phone);
  const [ isPhoneValid, setIsPhoneValid ] = useState(false);
  const [ phoneErrMsg, setPhoneErrMsg ] = useState('');

  function handleSubmit() {
    if (isNameValid && isEmailValid && isPhoneValid) {
      updateDetails(prev => ({...prev, name, email, phone}));
      return true;
    } else {
      validateInput(name, isNameValid, setNameErrMsg);
      validateInput(email, isEmailValid, setEmailErrMsg);
      validateInput(phone, isPhoneValid, setPhoneErrMsg);
      return false;
    }
  }

  function validateInput(state, isValid, setErrMsg) {
    if (!state) {
      setErrMsg('Required');
    } else if (!isValid) {
      setErrMsg('Invalid Entry');
    } else {
      setErrMsg('');
    }
  }

  useEffect(() => {
    setIsNameValid(nameRegex.test(name));
  }, [name]);

  useEffect(() => {
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setIsPhoneValid(phoneRegex.test(phone));
  }, [phone]);

  useEffect(() => {
    setNameErrMsg('');
    setEmailErrMsg('');
    setPhoneErrMsg('');
  }, [name, email, phone]);

  return (
    <FormContainer
      title='Personal info'
      desc='Please provide your name, email address, and phone number.'
      handleSubmit={handleSubmit}
      nextRoute='/plans'
    >
      <motion.div
        className='flex flex-col gap-4 mt-8'
        variants={enterSideway}
        initial="hidden"
        animate="show"
      >
        <div className="relative flex flex-col">
          <label htmlFor="fullname" className='text-blue-marine font-medium'>Name</label>
          <input
            type="text"
            name='fullname'
            id='fullname'
            required
            aria-required='true'
            aria-invalid={!isNameValid}
            className="px-4 py-2 border border-gray-cool"
            placeholder='e.g. Stephen King'
            onChange={(ev) => setName(ev.target.value)}
            value={name}
          />
          {(nameErrMsg || (name !== '' && !isNameValid)) && <p className='absolute top-0 right-0 text-strawberry-red font-medium' aria-live='polite'>{nameErrMsg}</p>}
        </div>

        <div className="relative flex flex-col">
          <label htmlFor="email" className='text-blue-marine font-medium'>Email Address</label>
          <input
            type="email"
            name='email'
            id='email'
            required
            aria-required='true'
            aria-invalid={!isEmailValid}
            className="px-4 py-2 border border-gray-cool"
            placeholder='e.g. stephenking@lorem.com'
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
          />
          {(emailErrMsg || (email !== '' && !isEmailValid)) && <p className='absolute top-0 right-0 text-strawberry-red font-medium' aria-live='polite'>{emailErrMsg}</p>}
        </div>

        <div className="relative flex flex-col">
          <label htmlFor="phone" className='text-blue-marine font-medium'>Phone Number</label>
          <input
            type="tel"
            name='phone'
            id='phone'
            required
            aria-required='true'
            aria-invalid={!isPhoneValid}
            className="px-4 py-2 border border-gray-cool"
            placeholder='e.g. +1 234 567 890'
            onChange={(ev) => setPhone(ev.target.value)}
            value={phone}
          />
          {(phoneErrMsg || (phone !== '' && !isPhoneValid)) && <p className='absolute top-0 right-0 text-strawberry-red font-medium' aria-live='polite'>{phoneErrMsg}</p>}
        </div>
      </motion.div>
    </FormContainer>
  )
}

export default Personal;