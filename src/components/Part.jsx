const Part = ({ name, exercises }) => {
  return (
    <main>
      <p>exercise: {name}</p>
      <p>number of exercises: {exercises}</p>
    </main>
  );
};

export default Part;