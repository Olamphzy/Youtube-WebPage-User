import { useState } from 'react';
import './App.css';



function App() {
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:8000/channel?username=${username}`);
    const data = await response.json();
    setUserInfo(data);

  };
  
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h1>Youtube User Login</h1>
        <label>
          Enter a YouTube username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {userInfo && (
        <div>
          <h2>{userInfo.username}</h2>
          <p>{userInfo.description}</p>
          <img src={userInfo.profile_picture} alt={`${userInfo.username}'s profile`} />
        </div>
      )}
    </div>
  );
}

export default App;