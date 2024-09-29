
const SumStatistics = ({good, neutral, bad}) => {
  return (
    <table style={{borderCollapse:'collapse'}}>
        <thead>
            <tr>
                <td style={{border:'1px solid black', minWidth:'100px', padding:'2px'}}>All Statistics</td>
                <td style={{border:'1px solid black', minWidth:'40px', padding:'2px'}}>{good + neutral + bad}</td>
            </tr>
        </thead>
    </table>
  )
}

export default SumStatistics