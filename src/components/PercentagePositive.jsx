const PercentagePositive = ({ good, neutral, bad }) => {
  const totalVotes = (good + neutral + bad);
  const percentagePositive = totalVotes === 0 ? 0 : ((good / totalVotes) * 100).toFixed(2);

  return (
    <table style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <td style={{ border: '1px solid black', minWidth: '140px', padding: '2px' }}>Percentage Positive</td>
        </tr>
        <tr>
        <td style={{ border: '1px solid black', minWidth: '40px', padding: '2px' }}>{percentagePositive} %</td>
        </tr>
      </thead>
    </table>
  );
};

export default PercentagePositive;