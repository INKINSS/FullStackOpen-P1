import Part from "./Part";

const Content = ({course}) => {
  return (
    <main>
      <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
    </main>
  );
};

export default Content;