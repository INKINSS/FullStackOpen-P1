import { useEffect } from 'react';
import VoteAnecdotes from './VoteAnecdotes';

const Anecdotes = () => {

  useEffect(() => {
    fetch('../../Anecdotes.json')
      .then(response => response.json())
  }, []);

  return (
    <div style={{margin:'10px 0'}}>
      <VoteAnecdotes />
    </div>
  );
};

export default Anecdotes;