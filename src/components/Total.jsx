const Total = ({part1, part2, part3}) => {
  return (
    <main>
        <p>Number of total exercises</p>
        <p>{part1.exercises + part2.exercises + part3.exercises}</p>
    </main>
  )
}

export default Total