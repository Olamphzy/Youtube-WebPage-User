import { useState } from 'react';
import './App.css';


function App() {
  const [username, setUsername] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`/channel/${username}`);
    if (res.ok) {
      const text = await res.text();
      setResponse(text);
    } else {
      setResponse('Error retrieving channel information');
    }
  };

  return (
    <div className="card">
    <form onSubmit={handleSubmit}>
      <h1>Youtube User Login</h1>
        <label>
          Enter a YouTube username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Channel Information:</h2>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

