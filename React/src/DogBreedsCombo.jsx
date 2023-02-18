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
        fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${selectedBreed}&size=med`, {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'live_e28daoaQpUE6Oms3jPidI8uJcUNH5yeX4YTwUNNWd09aPjvadCgyDbP1paS1iiNZ'
          }
        })
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
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
        </label>
  
        {breedInfo && (
          <div className="dogBreed">
            <h2>{breedInfo.name}</h2>
            <img src={breedInfo.url} alt={breedInfo.name} />
            <p>Weight: {breedInfo.breeds[0]?.weight?.metric}</p>
            <p>Height: {breedInfo.breeds[0]?.height?.metric}</p>
            <p>Bred for: {breedInfo.breeds[0]?.bred_for}</p>
            <p>Breed group: {breedInfo.breeds[0]?.breed_group}</p>
            <img className="dogbreed-img" src={breedInfo.url} alt={breedInfo.name} />
            <div className="dogBreed-body">
            <p>Weight: {breedInfo.breeds[0].weight?.metric}</p>
            <p>Height: {breedInfo.breeds[0].height?.metric}</p>
            <p>Bred for: {breedInfo.breeds[0].bred_for}</p>
            <p>Breed group: {breedInfo.breeds[0].breed_group}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

export default DogBreedsCombo;