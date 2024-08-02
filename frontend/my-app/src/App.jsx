import React, { useState, useEffect } from 'react';
const API_URL=import.meta.env.VITE_API_URL

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('${API_URL}')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
