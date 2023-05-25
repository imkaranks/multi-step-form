import React from 'react';

function Header({ title, desc }) {
  return (
    <header className='flex flex-col gap-2'>
      <h1 className='text-blue-marine text-3xl font-bold'>{title}</h1>
      <p className='text-gray-cool'>{desc}</p>
    </header>
  );
}

export default Header;