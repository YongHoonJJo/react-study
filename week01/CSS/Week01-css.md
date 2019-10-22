### Simple Page1 CSS

#### Step 1.

<img width="1280" alt="Week01-01" src="https://user-images.githubusercontent.com/13485924/66481058-05f21780-eadb-11e9-90d8-8edd49223f6b.png">

```jsx
import React, { useState } from 'react';
import styled from 'styled-components'

function App() {
  const [title, setTitle] = useState('LOGIN')

  return (
    <Wrap>
      <h1>{title}</h1>
    </Wrap>
  )
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
```

- padding, margin

안쪽여백은 padding 속성으로, 바깥여백은 margin 속성으로 지정

auto를 사용하면 HTML 요소를 가운데 정렬할 수 있습니다.

Ref : <https://www.codingfactory.net/10539>



- padding 속성을 제거한 경우

<img width="1279" alt="Week01-02" src="https://user-images.githubusercontent.com/13485924/66480984-d6430f80-eada-11e9-8f13-9f0560780bf7.png">

```jsx
const Wrap = styled.div`
  width: 500px;
  margin: 30px auto;
  border: 1px solid #eee;

  h1 {
    text-align: center;
  }
`
```



- padding 을 200px 로 지정한 경우

<img width="1280" alt="Week01-03" src="https://user-images.githubusercontent.com/13485924/66480698-32596400-eada-11e9-9ee8-0aeaca910387.png">

```jsx
const Wrap = styled.div`
  width: 500px;
  margin: 30px auto;
  padding: 200px;
  border: 1px solid #eee;

  h1 {
    text-align: center;
  }
`
```

<hr>

#### Step 2.

```jsx
//...

import Input from './Components/Input'

function App() {
  const [title, setTitle] = useState('LOGIN')

  return (
    <Wrap>
      <h1>{title}</h1>
      <Input label='E-Mail' type='text' />
    </Wrap>
  )
}

export default App

const Wrap = styled.div`
  //...
`
```

```jsx
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
`
```

<img width="1280" alt="Week01-04" src="https://user-images.githubusercontent.com/13485924/66484927-dba45800-eae2-11e9-81b8-c4f185fa3f4b.png">



- display: block 제거 / width: 50% 로 변경한 결과

<img width="1280" alt="Week01-05" src="https://user-images.githubusercontent.com/13485924/66485143-3dfd5880-eae3-11e9-8837-82e7fade811c.png">

> 블럭을 지정하면 input 태그가 다음 라인으로 내려간다.
>
> width 가 100%여도 다음 라인으로 내려간다.

<br>

```jsx
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
`
```

<img width="842" alt="Week01-06" src="https://user-images.githubusercontent.com/13485924/66485575-06db7700-eae4-11e9-91ea-c3b7875df9b5.png">

> `height: 40px` 가 추가되기 전에는 커서만 들어갈 정도의 크기였다.

<br>

```jsx
//...
const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #eee;
`
```

<img width="843" alt="Week01-07" src="https://user-images.githubusercontent.com/13485924/66485827-69cd0e00-eae4-11e9-9282-258b0aeeae36.png">

> `border: none;` 은 input 박스의 테두리 라인을 지운다. 
>
> `border-bottom: 1px solid #eee;` 은 input 박스의 하단 라인을 지정.

<br>

```jsx
//... 

const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
`
```

<img width="840" alt="Week01-08" src="https://user-images.githubusercontent.com/13485924/66486219-1f985c80-eae5-11e9-85f3-d0ccdf668035.png">

> `outline: none;` 가 없으면, input 박스에 커서를 두었을 때 아웃라인이 하이라이팅 되는데, 이를 설정하면 아웃라인이 하이라이팅되지 않는다. 

<br>

```jsx
//...
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
```

> 현재 요소에 포커스를 두었을 때, input 박스의 하단이 빨간색으로 변경되는데, `transition` 으로 인해 서서히 변경된다.
>
> transition : <https://www.codingfactory.net/10953>

<hr>

#### Step 3.

```jsx
import React, { useState } from 'react';
import styled from 'styled-components'

import Input from './Components/Input'
import Button from './Components/Button'

function App() {
  const [title, setTitle] = useState('LOGIN')

  const handleChange = () => {
    setTitle('ReactJS Review')
  }

  return (
    <Wrap>
      <h1>{title}</h1>
      <Input label='E-Mail' type='text' />
      <Input label='Password' type='password' />
      <Button onClick={handleChange}>click</Button>
    </Wrap>
  )
}

export default App

const Wrap = styled.div`
  //...
`
```

```jsx
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
`
```

<img width="845" alt="Week01-09" src="https://user-images.githubusercontent.com/13485924/66487267-fd074300-eae6-11e9-83d9-d2b2b0624985.png">

> 버튼에 스타일링을 하기 전 상태

<br>

```jsx
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
```

<img width="844" alt="Week01-10" src="https://user-images.githubusercontent.com/13485924/66488422-d5b17580-eae8-11e9-8039-4e0159cc695b.png">

> `outline: 0;` vs `outline: none;` : <https://stackoverflow.com/questions/35648667/outline-none-vs-outline-0>

