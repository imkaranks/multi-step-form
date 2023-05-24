import React, { useEffect, useState } from 'react';
import Header from './Header';
import Button from './Button';

const nameRegex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\d{10}$/;

function Personal({ updateStep, updateDetails }) {
  const [ name, setName ] = useState('');
  const [ isNameValid, setIsNameValid ] = useState(false);
  const [ nameErrMsg, setNameErrMsg ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ isEmailValid, setIsEmailValid ] = useState(false);
  const [ emailErrMsg, setEmailErrMsg ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ isPhoneValid, setIsPhoneValid ] = useState(false);
  const [ phoneErrMsg, setPhoneErrMsg ] = useState('');

  function proceedNext() {
    if (isNameValid && isEmailValid && isPhoneValid) {
      updateStep(prev => prev + 1);
      updateDetails(prev => ({...prev, name, email, phone}));
    } else {
      validateInput(name, isNameValid, setNameErrMsg);
      validateInput(email, isEmailValid, setEmailErrMsg);
      validateInput(phone, isPhoneValid, setPhoneErrMsg);
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
    <div className='w-11/12 max-w-lg mx-auto bg-white -mt-16 rounded-lg shadow-lg px-4 py-8 h-full flex flex-col sm:shadow-none sm:p-4 sm:mt-0'>
      <Header
        title='Personal info'
        desc='Please provide your name, email address, and phone number.'
      />
      <form className='flex flex-col gap-4 mt-8'>
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
      </form>

      <div className="fixed left-0 right-0 bottom-0 flex justify-end items-center p-4 bg-white sm:mt-auto sm:static sm:p-0">
        <Button
          type='primary'
          text='Next Step'
          onClick={proceedNext}
        />
      </div>
    </div>
  );
}

export default Personal;