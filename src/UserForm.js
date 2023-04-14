import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter YouTube username:
        <input type="text" value={username} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}