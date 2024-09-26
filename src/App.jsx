import { useState } from "react";
import Statistics from "./components/Statistics";
import Title from "./components/Title";

const App = () => {

  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad:0
  });
  
  const handleClickGood = () => {
    setValue({...value, good: value.good + 1});
  }

  const handleClickNeutral = () => {
    setValue({...value, neutral: value.neutral + 1});
  }

  const handleClickBad = () => {
    setValue({...value, bad: value.bad + 1});
  }
  
  const handleReset = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  return (
    <main>
      <Title title={'Give Feedback'} />
      <div>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
        <button onClick={handleReset}>reset</button>
      </div>
      <Title title={'Statistics'} />
      <div>
        <Statistics good={value.good} neutral={value.neutral} bad={value.bad} />
      </div>

    </main>
  );
};

export default App;
