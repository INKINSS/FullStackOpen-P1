
const AllStatistics = ({good, neutral, bad}) => {
  return (
    <div>
        <p>all Statistics</p>
        <p>{ good + neutral + bad }</p>
    </div>
  )
}

export default AllStatistics