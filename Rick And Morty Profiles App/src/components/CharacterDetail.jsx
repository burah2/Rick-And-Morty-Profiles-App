import React from 'react';
import { useState, useEffect } from 'react';

function CharacterDetail({ character }) {

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      {
        characters.map(( character )=>{
          return (
            <div key={character.id}>
              <img src={character.image} alt={character.name} className="w-64" />
              <h2 className="text-xl font-semibold">{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
            
            </div>
          )
        })
      }
    </div>
  )
}

export default CharacterDetail;
