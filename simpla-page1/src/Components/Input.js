import React from 'react'
import styled from 'styled-components'

const Input = ({label='', type='text'}) => {
  return (
    <Wrap>
      <Label>{label}</Label>
      <InputStyle type={type} />
    </Wrap>
  )
}

export default Input

const Wrap = styled.div`
  margin: 20px 0;
`

const Label = styled.label`
  display: block;
  font-weight: bold;
`

const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;

  &:focus {
    border-bottom-color: red;
  }
  transition: border .2s ease-in;
`