import React from 'react'

const Input = ({label='', type='text'}) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  )
}

export default Input