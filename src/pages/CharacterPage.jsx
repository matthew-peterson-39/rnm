import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import axios from 'axios'

const CharacterPage = () => {
    const [characters, setCharacters] = useState([])
    const [pageCount, setPageCount] = useState(1)

    const getCharacters = async () => {
        const r = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageCount}`);
        setCharacters(r.data.results)
    }

    const handlePrev = () => {
        setPageCount(pageCount-1)
        getCharacters()
    }

    const handleNext = () => {
        setPageCount(pageCount+1)
        getCharacters()
    }

    // const getAllCharacters = async () => {
    //     let url = 'https://rickandmortyapi.com/api/character'
    //     let records = [];
    //     let page = 0;
    //     let totalPages = 0;

    //     do {
    //         let response= await axios.get(url, { params: { page: ++page } });
    //         totalPages = response.data.info.pages;
    //         console.log(`downloadRecords: page ${page} of ${totalPages} downloaded...`);
    //         records = records.concat(response.data.results);
    //     } while (page < totalPages)

    //     setCharacters(records)

    // }

    useEffect(()=>{
        console.log(characters)
        getCharacters()
    },[])
    
    return (
    <>
        <div id='wrapper' className='min-h-screen bg-slate-400 text-center pt-20'> 
            <div>All | Alive | Unalived</div>
            <div className='flex gap-8 flex-wrap p-10 justify-center'>
                {characters.map( character => (
                    <CharacterCard key={character.id}
                        image={character.image} 
                        name={character.name} 
                        species={character.species} 
                        episodeList={character.episode}
                        status={character.status}/>
                ))}
            </div>
        <div className='bg-slate-400 flex gap-8 p-10 justify-center' >
            <button onClick={handlePrev}>Prev</button>
            <h1>{pageCount}</h1>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
    </>
  )
}

export default CharacterPage;