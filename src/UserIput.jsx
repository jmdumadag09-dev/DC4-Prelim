import { useState } from "react";

function UserInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Your input: {name}</h2>
      <br></br>
    </>
  );
}

export default UserInput;