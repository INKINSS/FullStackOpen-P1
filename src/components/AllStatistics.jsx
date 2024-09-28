import Average from "./Average"
import PercentagePositive from "./PercentagePositive"
import Statistics from "./Statistics"
import SumStatistics from "./SumStatistics"

const AllStatistics = ({value}) =>{
  return (
    <main>
        <Statistics good={value.good} neutral={value.neutral} bad={value.bad} />
        <SumStatistics
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
  )
}

export default AllStatistics