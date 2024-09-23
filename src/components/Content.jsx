import Part from "./Part";

const Content = ({
  part1,
  part2,
  part3,
  excersise1,
  excersise2,
  excersise3,
}) => {
  return (
    <main>
      <Part exercisesn={part1} numberExcersisen={excersise1} />
      <Part exercisesn={part2} numberExcersisen={excersise2} />
      <Part exercisesn={part3} numberExcersisen={excersise3} />
    </main>
  );
};

export default Content;
