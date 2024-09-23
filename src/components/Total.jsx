const Total = ({ course }) => {
  return (
    <main>
        <p>Number of total exercises</p>
        <p>{ course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises }</p>
    </main>
  )
}

export default Total