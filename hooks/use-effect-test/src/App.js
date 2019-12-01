import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [hello, setHello] = useState(0)
 
  useEffect(() => {
    console.log('render once')
    return () => {
      console.log("unmounted. useEffect(f, [])");
    }
  }, [])

  useEffect(() => {
    console.log('when rendered') 
    return () => {
      console.log("unmounted. useEffect(f)");
    }
  })

  useEffect(() => {
    console.log('render watch count', count)
    return () => {
      console.log("unmounted. useEffect(f, [count])");
    }
  }, [count])

  useEffect(() => {
    console.log('render watch hello', hello)
    return () => {
      console.log("unmounted. useEffect(f, [hello])");
    }
  }, [hello])

  const onChangeUp = () => {
    setCount(count + 1)
  }

  const onChangeDown = () => {
    setHello(hello - 1)
  }

  return (
    <div>
      {count}
      <button onClick={onChangeUp}>+</button>
      <button onClick={onChangeDown}>-</button>
    </div>
  )
}

export default App;
