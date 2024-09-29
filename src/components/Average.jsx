const Average = ({ good, neutral, bad }) => {
    const valueAverage = (good - bad) / (good + neutral + bad);
    const formattedAverage = isNaN(valueAverage) ? 0 : valueAverage.toFixed(2);
  
    return (
      <table style={{borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <td style={{border:'1px solid black', minWidth:'100px', padding:'2px'}}>Average</td>
            <td style={{border:'1px solid black', minWidth:'40px', padding:'2px'}}>{formattedAverage}</td>
          </tr>
        </thead>
      </table>
    );
  };
  
  export default Average;