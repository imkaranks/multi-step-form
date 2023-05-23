import React from 'react'

function Button({ type, text, onClick }) {
  return type === 'primary'
    ? (
      <button className='font-medium px-6 py-2 border-none bg-blue-marine text-white rounded-lg' onClick={onClick}>
        {text}
      </button>
    ) : (
      <button className='font-medium px-6 py-2 border-none text-gray-cool rounded-lg' onClick={onClick}>
        {text}
      </button>
    )
}

export default Button