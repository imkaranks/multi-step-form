import React from 'react';

function Header({ title, desc }) {
  return (
    <header>
      <h1 className='text-blue-marine text-3xl font-bold'>{title}</h1>
      <p className='text-gray-cool font-medium'>{desc}</p>
    </header>
  );
}

export default Header;