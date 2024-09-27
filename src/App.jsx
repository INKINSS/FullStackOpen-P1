import { useState } from "react";
import Statistics from "./components/Statistics";
import Title from "./components/Title";
import AllStatistics from "./components/AllStatistics";
import Average from "./components/Average";
import PercentagePositive from "./components/PercentagePositive";

const App = () => {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
      <Statistics good={value.good} neutral={value.neutral} bad={value.bad} />
      <AllStatistics
        good={value.good}
        neutral={value.neutral}
        bad={value.bad}
      />
      <Average good={value.good} neutral={value.neutral} bad={value.bad} />
      <PercentagePositive
        good={value.good}
        neutral={value.neutral}
        bad={value.neutral}
      />
    </main>
  );
};

export default App;
