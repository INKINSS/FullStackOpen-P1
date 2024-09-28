import { useState } from "react";
import Title from "./components/Title";
import AllStatistics from "./components/AllStatistics";

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
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
        <button onClick={handleReset}>reset</button>
      </div>
      <Title title={"Statistics"} />
      { anyVote === 0 ? <span>No Feedback given</span> : <AllStatistics value={value} /> }
    </main>
  );
};

export default App;
