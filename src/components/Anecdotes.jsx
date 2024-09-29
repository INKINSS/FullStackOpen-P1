import { useState, useEffect } from 'react';

const Anecdotes = () => {
  const [anecdotes, setAnecdotes] = useState([]);
  const [currentAnecdote, setCurrentAnecdote] = useState('');

  useEffect(() => {
    fetch('../../Anecdotes.json')
      .then(response => response.json())
      .then(data => setAnecdotes(data));
  }, []);

  const showRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setCurrentAnecdote(anecdotes[randomIndex].text);
  };

  return (
    <div style={{margin:'10px 0'}}>
      <button type='button' onClick={showRandomAnecdote}>Mostrar Anécdota</button>
      {currentAnecdote && <p>{currentAnecdote}</p>}
    </div>
  );
};

export default Anecdotes;