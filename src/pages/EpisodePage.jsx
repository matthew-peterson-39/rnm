import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Seasons from '../components/Seasons'

const EpisodePage = () => {
    
    const seasons = [
        {   
            id: 1,
            name: "Season 1",
            episodes: 11,
            imageUrl: "https://resizing.flixster.com/gsGd4m0Fm2campmJ9ZyaYXWPS1A=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEzMDE3Ni53ZWJw"
        },
        {   
            id: 2,
            name: "Season 2",
            episodes: 10,
            imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11928964_b_v9_ac.jpg"
        },
        {   
            id: 3,
            name: "Season 3",
            episodes: 10,
            imageUrl: "https://resizing.flixster.com/gsGd4m0Fm2campmJ9ZyaYXWPS1A=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEzMDE3Ni53ZWJw"
        },
        {   
            id: 4,
            name: "Season 4",
            episodes: 10,
            imageUrl: "https://resizing.flixster.com/x8gJp78ygKg_VQbdHpuDHdIijnE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjU5NjY2My53ZWJw"
        },
        {
            id: 5,
            name: "Season 5",
            episodes: 10,
            imageUrl: "https://www.syfy.com/sites/syfy/files/2021/06/rick-and-morty-season-5.jpg"
        }
        
    ]

    const getEpisodes = async () => {
        const r = await axios.get('https://rickandmortyapi.com/api/episode')
        console.log(r.data)
    }

    useEffect(()=>{
        getEpisodes()
    },[])

    console.log(episodes)
    return (
        <>
            <div className='h-screen p-20 bg-fixed' >
                {seasons.map(season =>(
                    // <SeasonAccordion episodes={szn}/>
                    <Seasons seasons={seasons}/>
                ))}
            </div>
        </>
  )
}

export default EpisodePage