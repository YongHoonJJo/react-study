import React, {useState} from 'react';

function App() {
  const [title, setTitle] = useState('LOGIN')

  const handleChange = () => {
    setTitle('ReactJS!!')
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleChange}>click</button>
    </div>
  );
}

export default App;
