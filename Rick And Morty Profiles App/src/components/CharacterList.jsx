import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CharacterDetail from "./CharacterDetail"


const CharacterList = ()=>{
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async()=>{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json()

    setCharacters(data.results);
    
    }

  useEffect(()=>{
    fetchCharacters()
  }, [])

  return (
    <div>
      {
        characters.map(( character )=>{
          return (
            <div key={character.id}>
              <Link to={`/character/${character.id}`} state={character}>View Character</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default CharacterList;