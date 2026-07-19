import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [byTen, setByTen] = useState(10);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
      <button onClick={reset}>reset</button>

      <p>Count by ten: {byTen}</p>
      <button onClick={() => setByTen(byTen + 10)}>+10</button>
      <button onClick={() => setByTen(byTen - 10)}>-10</button>
      <button onClick={() => setByTen(10)}>Reset</button>
    </div>
  );
}

export default UseState;
