import { useState } from "react";

function Email() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Email:", form.email);
    console.log("Password:", form.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Log in</button>
    </form>
  );
}

export default Email;