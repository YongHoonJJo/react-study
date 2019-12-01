### Hooks - useMemo()

```jsx
import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      //...
    },
    {
      //...
    },
    {
      //...
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    //...
  };

  const onRemove = id => {
    //...
  };
  const onToggle = id => {
    //...
  };
  
  // useMemo 는 특정 결과값을 재사용 할 때 사용
  const count = useMemo(() => countActiveUsers(users)); // render 될 때마다 호출
  const count = useMemo(() => countActiveUsers(users), []); // 처음 한번만 호출
  const count = useMemo(() => countActiveUsers(users), [users]); // users 를 watch.

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
```

- useMemo 는 특정 결과값을 재사용 할 때 사용된다.
- useEffect 와 마찬가지로 무조건, 한 번, 일정 변수에 의해 결과값을 다시 계산할 수 있게 할 수 있다.

