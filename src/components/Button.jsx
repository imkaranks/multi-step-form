import React from 'react'

function Button({ type, text, onClick, css }) {
  return type === 'primary'
    ? (
      <button type='submit' className={`font-medium px-6 py-2 border-none bg-blue-marine text-white rounded-lg hover:bg-blue-purplish ${css}`} onClick={onClick}>
        {text}
      </button>
    ) : (
      <button type='button' className={`font-medium px-6 py-2 border-none text-gray-cool rounded-lg hover:text-blue-marine ${css}`} onClick={onClick}>
        {text}
      </button>
    )
}

export default Button