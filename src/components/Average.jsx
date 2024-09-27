const Average = ({ good, neutral, bad }) => {
    const valueAverage = (good - bad) / (good + neutral + bad);
    const formattedAverage = isNaN(valueAverage) ? 0 : valueAverage.toFixed(2);
  
    return (
      <div>
        <p>Average: {formattedAverage}</p>
      </div>
    );
  };
  
  export default Average;