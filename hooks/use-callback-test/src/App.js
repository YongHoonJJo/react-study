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