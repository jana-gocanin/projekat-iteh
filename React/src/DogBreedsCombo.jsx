import React, { useState, useEffect } from "react";

function DogBreedsCombo() {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");
    const [breedInfo, setBreedInfo] = useState(null);
  
    // Fetch list of dog breeds from API
    useEffect(() => {
      fetch("https://api.thedogapi.com/v1/breeds")
        .then((response) => response.json())
        .then((data) => setBreeds(data));
    }, []);
  
    // Fetch breed info from API when a breed is selected
    useEffect(() => {
      if (selectedBreed) {
        fetch(`https://api.thedogapi.com/v1/breeds/search?q=${selectedBreed}`)
          .then((response) => response.json())
          .then((data) => setBreedInfo(data[0]));
      }
    }, [selectedBreed]);
  
    // Event handler for when a breed is selected
    const handleBreedChange = (event) => {
      setSelectedBreed(event.target.value);
    };
  
    return (
      <div>
        <label>
          Select a dog breed:
          <select value={selectedBreed} onChange={handleBreedChange}>
            <option value="">--Please select a breed--</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.name}>
                {breed.name}
              </option>
            ))}
          </select>
        </label>
  
        {breedInfo && (
          <div>
            <h2>{breedInfo.name}</h2>
            <img src={breedInfo.image.url} alt={breedInfo.name} />
            <p>Weight: {breedInfo.weight.metric}</p>
            <p>Height: {breedInfo.height.metric}</p>
            <p>Bred for: {breedInfo.bred_for}</p>
            <p>Breed group: {breedInfo.breed_group}</p>
          </div>
        )}
      </div>
    );
  };

export default DogBreedsCombo;