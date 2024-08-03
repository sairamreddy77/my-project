const API_URL=import.meta.env.VITE_API_URL
import { useState,useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    console.log('API URL:', API_URL); // Check if the environment variable is correct
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/display`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    setOutput(data.output);
  };

  return (
    <div>
      <h1>Input Display App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Output:</h2>
      <p>{output}</p>
    </div>
  );
}

export default App;
