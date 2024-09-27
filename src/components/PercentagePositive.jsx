const PercentagePositive = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad;
  const percentagePositive = totalVotes === 0 ? 0 : (good / totalVotes) * 100;

  return (
    <div>
      <p>Percentage Positive</p>
      <p>{percentagePositive}%</p>
    </div>
  );
};

export default PercentagePositive;