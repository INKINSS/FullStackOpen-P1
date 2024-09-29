
const StatisticLine = ( {title, value}) => {
  return (
    <main>
        <table style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <td style={{border:'1px solid black', minWidth:'100px', padding:'2px'}}>{title}</td>
                    <td style={{border:'1px solid black', minWidth:'40px', padding:'2px'}}>{value}</td>
                </tr>
            </thead>
        </table>
    </main>
  )
}

export default StatisticLine