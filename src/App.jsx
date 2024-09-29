import { useState } from "react";
import Title from "./components/Title";
import AllStatistics from "./components/AllStatistics";
import FeedBackButton from "./components/FeedBackButton";
import Anecdotes from "./components/Anecdotes";

const App = () => {

  
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const anyVote = value.good + value.neutral + value.bad

  const handleClickGood = () => {
    setValue({ ...value, good: value.good + 1 });
  };

  const handleClickNeutral = () => {
    setValue({ ...value, neutral: value.neutral + 1 });
  };

  const handleClickBad = () => {
    setValue({ ...value, bad: value.bad + 1 });
  };

  const handleReset = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <main>
      <Title title={"Give Feedback"} />
      <div>
        <FeedBackButton title={'Good'} onclick={handleClickGood} />
        <FeedBackButton title={'Neutral'} onclick={handleClickNeutral} />
        <FeedBackButton title={'Bad'} onclick={handleClickBad} />
        <FeedBackButton title={'Reset'} onclick={handleReset} />
      </div>
      <Title title={"Statistics"} />
      { anyVote === 0 ? <span>No Feedback given</span> : <AllStatistics value={value} /> }
      <Anecdotes />
    </main>
  );
};

export default App;
