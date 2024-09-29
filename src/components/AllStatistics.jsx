import StatisticLine from "./StatisticLine"
import SumStatistics from './SumStatistics'

const AllStatistics = ({value}) =>{

  const Average = () => {
    return (
      <div>
          <p>Average</p>
          <p>{ (value.good - value.bad) / (value.good + value.neutral + value.bad) }</p>
      </div>
    )
  }

  const PercentagePositive = () => {
    return (
      <div>
          <p>Percentage Positive</p>
          <p>{ (value.good / (value.good + value.neutral + value.bad)) * 100 } %</p>
      </div>
    )
  }

  return (
    <main>
      <StatisticLine title="good" value={value.good} />
      <StatisticLine title="neutral" value={value.neutral} />
      <StatisticLine title="bad" value={value.bad} />
        <SumStatistics good={value.good} neutral={value.neutral} bad={value.bad} />
        <Average good={value.good} neutral={value.neutral} bad={value.bad} />
        <PercentagePositive
            good={value.good}
            neutral={value.neutral}
            bad={value.neutral}
        />
    </main>
  )
}

export default AllStatistics