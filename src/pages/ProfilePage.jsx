import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CharacterProfilePage = () => {
  const [characters, setCharacters] = useState({})
  const {id} = useParams()
  const [location, setLocation] = useState(null)
  const [origin, setOrigin] = useState(null)
  

  const getCharacter = async () => {
    const r = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(r.data)
    setCharacters(r.data)
    setOrigin(r.data.origin.name)
    setLocation(r.data.location.name)
  }

  useEffect(()=>{
    getCharacter()
  },[])
  
  return (
    <>
    <div className='h-screen w-screen flex justify-center items-center flex-col flex-wrap gap-4'>
      <img src={characters.image} alt="" />
      <h1>{characters.name}</h1>
      <h1>{characters.status}</h1>
      <h1>{characters.species}</h1>
      <h1>{characters.gender}</h1>
      <h1>{characters.location.name}</h1>
      <h1>Origin: {origin}</h1>
      <h1>Last Seen: {location}</h1>
    </div>
    </>
  )
}

export default CharacterProfilePage