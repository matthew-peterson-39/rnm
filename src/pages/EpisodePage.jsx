import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([])

    const getEpisodes = async () => {
        const r = await axios.get('https://rickandmortyapi.com/api/episode')
        setEpisodes(r.data.results)
    }

    useEffect(()=>{
        getEpisodes()
    },[])

    return (
    <div className='h-screen p-20'>

    </div>
  )
}

export default EpisodePage