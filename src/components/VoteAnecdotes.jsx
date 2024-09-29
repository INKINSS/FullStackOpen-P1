import { useState } from "react";
import anecdotes from "../../Anecdotes.json";

const VoteAnecdotes = () => {
  const [currentAnecdoteIndex, setCurrenAnecdoteIndex] = useState(0);
  const [anecdoteVotes, setAnecdoteVotes] = useState(anecdotes);

  const handleVote = () => {
    const newAnecdotes = [...anecdoteVotes];
    newAnecdotes[currentAnecdoteIndex].votes += 1;
    setAnecdoteVotes(newAnecdotes);
  };

  const showNextAnecdote = () => {
    setCurrenAnecdoteIndex((currentAnecdoteIndex + 1) % anecdotes.length);
  };
  

  return (
    <main>
      <span>{anecdoteVotes[currentAnecdoteIndex].text}</span>
      <p>Has {anecdoteVotes[currentAnecdoteIndex].votes} votes</p>
      <div style={{display:'flex', gap:'5px'}}>
        <button type="button" onClick={handleVote}>
          Vote
        </button>
        <button type="button" onClick={showNextAnecdote}>
          Next Anecdote
        </button>
      </div>
    </main>
  );
};

export default VoteAnecdotes;
