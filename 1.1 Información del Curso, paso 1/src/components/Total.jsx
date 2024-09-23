const Total = ({exercises1, exercises2, exercises3}) => {
  return (
    <main>
        <p>Number of exercises</p>
        <p>{exercises1 + exercises2 + exercises3}</p>
    </main>
  )
}

export default Total