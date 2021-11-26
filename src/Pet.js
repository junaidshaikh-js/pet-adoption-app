const Pet = (props) => {
  const { name, animal, breed, images, id, location } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>

      <div className="info">
        <h2>{name}</h2>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
