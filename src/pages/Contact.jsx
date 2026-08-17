import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      setError("Please enter both your name and email.");
      return;
    }

    setError("");

    navigate("/greet");
  }

  return (
    <div className="page-card">
      <h1>Contact Me</h1>

      <p>Fill out the form below to send a message.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <br />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div className="form-group">
          <label>Email:</label>
          <br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <br />

         <div className="form-group">
          <label>Message:</label>
          <br />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="5"
          />
        </div>

        <br />

        {error && <p>{error}</p>}

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;