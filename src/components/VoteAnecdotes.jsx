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

  const getMostVotedAnecdote = () => {
    const mostVoted = anecdoteVotes.reduce((max, anecdote) => 
      anecdote.votes > max.votes ? anecdote : max, anecdoteVotes[0]);
    return mostVoted.votes === 0 ? "debe de haber al menos un voto" : mostVoted.text;
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
      <div style={{marginTop: '20px'}}>
        <h3>Anecdota más votada:</h3>
        <p>{getMostVotedAnecdote()}</p>
      </div>
    </main>
  );
};

export default VoteAnecdotes;