import { Link } from "react-router-dom";

function Greet() {
  return (
    <div className="page-card greet">
      <h1>Thank You!</h1>

      <p>
        Your message has been submitted successfully.
      </p>

      <p>
        We appreciate you taking the time to contact us.
      </p>

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Greet;