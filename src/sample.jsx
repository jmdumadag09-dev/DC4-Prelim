import NewSample from "./NewSample";

import { useState } from "react";
function App() {
  const name = "Jian Gwapo";
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, React!</h1>
      <h2>{count}</h2>
      <p>Welcome {name} to your first React application.</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onclick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <button onClick={() => alert("Button Clicked!")}>Click Me</button>
      <NewSample />
    </div>
  );
}

export default App;
