import React from 'react';

function Step({count, desc, isActive}) {
  return (
    <div className='flex flex-col gap-4 justify-center items-center sm:justify-start sm:items-start sm:flex-row'>
      <div className={`w-8 flex justify-center items-center font-medium aspect-square rounded-full border border-magnolia ${isActive ? 'bg-magnolia text-blue-marine' : 'text-white'}`}>{count}</div>
      <div className='hidden sm:flex sm:flex-col uppercase'>
        <span className='text-gray-light'>Step {count}</span>
        <span className='text-white font-medium'>{desc}</span>
      </div>
    </div>
  );
}

export default Step;