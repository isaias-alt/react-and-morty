import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import PrincipalImage from './components/PrincipalImage'
import Character from './components/Characters'
import Pagination from './components/Pagination'

export default function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) =>{
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(url);
  }, [])

  return(
    <>
      <Navbar brand="React And Morty"/>
      <PrincipalImage />
        <div className="container mt-5">
          <Character characters={characters} />
        </div>
      <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  )
}