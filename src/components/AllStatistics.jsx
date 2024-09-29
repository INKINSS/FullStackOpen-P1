import Average from "./Average";
import StatisticLine from "./StatisticLine";
import SumStatistics from "./SumStatistics";
import PercentagePositive from "./PercentagePositive";

const AllStatistics = ({ value }) => {
  return (
    <main>
      <StatisticLine title="good" value={value.good} />
      <StatisticLine title="neutral" value={value.neutral} />
      <StatisticLine title="bad" value={value.bad} />
      <SumStatistics
        good={value.good}
        neutral={value.neutral}
        bad={value.bad}
      />
      <Average good={value.good} neutral={value.neutral} bad={value.bad} />
      <PercentagePositive
        good={value.good}
        neutral={value.neutral}
        bad={value.bad}
      />
    </main>
  );
};

export default AllStatistics;
