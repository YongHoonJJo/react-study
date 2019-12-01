### Hooks - useEffect()

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [hello, setHello] = useState(0)
 
  useEffect(() => {
    console.log('render once')
  }, [])

  useEffect(() => {
    console.log('when rendered') 
  })

  useEffect(() => {
    console.log('render watch count', count)
  }, [count])

  useEffect(() => {
    console.log('render watch hello', hello)
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

```

- 두번째 인자를 전달하지 않을 경우, 해당 컴포넌트가 렌더링될 때마다 첫번째 인자로 전달한 함수가 호출된다.
- 두번째 인자를 빈 배열로 전달할 경우, 해당 컴포넌트가 렌더링 된 최초 1회만 호출된다.
- 두번째 인자를 배열을 전달하게 될 경우, 배열안에 들어있는 변수를 watch 하게 된다. 즉, 컴포넌트가 처음 생성될 때 호출되고, 그 이후에는 해당 변수들의 변화가 생길 때 마다 호출된다. 
- 첫번째 인자로 전달한 함수에 함수를 리턴하게 될 경우, 해당 컴포넌트가 unmounted 될 때 호출된다.