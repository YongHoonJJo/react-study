import React, {useState} from 'react';

import Input from './Components/Input'
import Button from './Components/Button'

function App() {
  const [title, setTitle] = useState('LOGIN')

  const handleChange = () => {
    setTitle('ReactJS!!')
  }

  return (
    <div>
      <h1>{title}</h1>
      <Input label='E-Mail' type='text' />
      <Input label='Password' type='password' />
      <Button onClick={handleChange}>click</Button>
    </div>
  );
}

export default App;
