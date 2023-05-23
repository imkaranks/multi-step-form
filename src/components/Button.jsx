import React from 'react'

function Button({ type, text }) {
  return type === 'primary'
    ? (
      <button className='font-medium px-6 py-2 border-none bg-blue-marine text-white rounded-lg'>
        {text}
      </button>
    ) : (
      <button className='font-medium px-6 py-2 border-none text-gray-cool rounded-lg'>
        {text}
      </button>
    )
}

export default Button