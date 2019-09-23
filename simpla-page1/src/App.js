import React, {useState} from 'react'
import styled from 'styled-components'

import Input from './Components/Input'
import Button from './Components/Button'

function App() {
  const [title, setTitle] = useState('LOGIN')

  const handleChange = () => {
    setTitle('ReactJS!!')
  }

  return (
    <Wrap>
      <h1>{title}</h1>
      <Input label='E-Mail' type='text' />
      <Input label='Password' type='password' />
      <Button onClick={handleChange}>click</Button>
    </Wrap>
  );
}

export default App

const Wrap = styled.div`
  width: 500px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #eee;

  h1 {
    text-align: center;
  }
`
