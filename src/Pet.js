const Pet = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </>
  );
};

export default Pet;
