import {useState} from "react"

function UseState() {
  const [byTen, setByTen] = useState(10);

  const hasMark = () => setByTen(byTen + 1);
  const undo = () => setByTen(byTen - 1);
  const reset = () => setByTen.value == 0; 

  return (
    <div>
      <h3>Student present: {byTen}</h3>
      <button onClick={hasMark}>Mark Present</button>
      <button onClick={undo}>Undo</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default UseState;
