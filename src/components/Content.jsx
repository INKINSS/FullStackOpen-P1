import Part from "./Part";

const Content = ({part1, part2, part3}) => {
  return (
    <main>
      <Part exercisesn={part1.exercises} numberExcersisen={part1.name} />
      <Part exercisesn={part2.exercises} numberExcersisen={part2.name} />
      <Part exercisesn={part3.exercises} numberExcersisen={part3.name} />
    </main>
  );
};

export default Content;
