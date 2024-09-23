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
      <p>
        {part1} {excersise1}
      </p>
      <p>
        {part2} {excersise2}
      </p>
      <p>
        {part3} {excersise3}
      </p>
    </main>
  );
};

export default Content;
