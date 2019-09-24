import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <ButtonStyle {...props}>
      {props.children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  width: 100%;
  height: 50px;
  font-size: 14px;
  border: 1px solid #eee;
  background-color: #eee;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
  transition: all .2s ease-in;
`