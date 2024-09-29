
const StatisticLine = ( {title, value}) => {
  return (
    <main>
        <h2>{title} : <span style={{fontWeight:'normal'}}>{value}</span></h2>
    </main>
  )
}

export default StatisticLine