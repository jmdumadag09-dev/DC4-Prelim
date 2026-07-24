import {useState}from 'react';
 
function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [agreed, setAgreed]     = useState(false);

  const handleSubmit = () => {
    if (!agreed) return;
    console.log({ username, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={email}    onChange={e => setEmail(e.target.value)} />
      <input type="checkbox"  checked={agreed} onChange={e => setAgreed(e.target.checked)} />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;