### Hooks - usdCallback()

```jsx
import React, { useState, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCheck1 = useCallback(() => {
    setCount(count + 1);
    console.log(count);
  }, []);

  const handleCheck2 = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCheck3 = useCallback(() => {
    setCount(count + 1);
    console.log(count);
  });

  const handleCheck4 = useCallback(() => {
    setCount(count + 1);
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCheck1}>테스트 버튼1</button>
      <button onClick={handleCheck2}>테스트 버튼2</button>
      <button onClick={handleCheck3}>테스트 버튼3</button>
      <button onClick={handleCheck4}>테스트 버튼4</button>
    </div>
  );
};

export default App;
```

- `useCallback` 은 `useMemo` 와 비슷한 Hook
- `useMemo` 는 특정 결과값을 재사용 할 때 사용하는 반면, `useCallback` 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.
- `onCreate`, `onRemove`, `onToggle` 함수의 경우, 컴포넌트가 리렌더링 될 때 마다 새로 만들어진다.
- 이 같은 내부 실행 함수를 useCallback으로 감쌀 수 있으며, []의 내부에 변수를 선언 또는 선언하지 않을 수 있다.
- 동작은 useEffect와 같이 무족건, 한번, 일정 변수에 의한으로 제한 할 수 있으며, 그 설정에 의해서 내부에 쓰인 count의 값이 다르게 동작한다. ( 즉 함수의 결과를 변수에 저장하는 것을 상황에 따라 동작하지 않게 한다. )
  - `handleCheck1` 의 경우 항상 setCount(1) 이 실행되며, console.log(0) 을 출력한다.
  -  handleCheck1 함수가 생성될때 내부의 count가 0이고 그 함수는 업데이트 되지 않았기 때문이다.
- 함수 안에서 사용하는 state 혹은 props 가 있다면 꼭, `deps` 배열안에 포함시켜야 한다.