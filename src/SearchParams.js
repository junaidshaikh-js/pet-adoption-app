import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [disabled, setDisabled] = useState(true);
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setDisabled(false);
            }}
            onBlue={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => {
              return <option value={animal}>{animal}</option>;
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={animal}
            onChange={(e) => setBreed(e.target.value)}
            onBlue={(e) => setBreed(e.target.value)}
            disabled={disabled}
          >
            <option />
            {breeds.map((breed) => {
              return <option value={breed}>{breed}</option>;
            })}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
