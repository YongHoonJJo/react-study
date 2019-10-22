// component에 'import React from "react"'는 반드시 필요
import React, {useState} from 'react'
import styled from 'styled-components'

import Input from './Components/Input'
import Button from './Components/Button'

function App() {
  // 다음과 같이 state 값을 생성할 수 있고 앞의 title은 변수로, setTitle은 변경함수로 사용한다.
  const [title, setTitle] = useState('LOGIN')

  const handleChange = () => {
     // title의 값을 변경할 때, 반드시 다음과 같이 변경함수를 이용하여야 render가 다시 일어나서 변동값을 적용 시키게 된다.
    setTitle('ReactJS!!')
  }

  return (
    // 최상위에는 반드시 다음과 같이 div 등으로 감싸야 한다.
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

  /* 다음과 같이 scss형식으로 작성이 가능. */
  h1 {
    text-align: center;
  }
`
