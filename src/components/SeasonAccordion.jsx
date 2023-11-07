import React from 'react'
import Alpine from 'alpinejs'

const SeasonAccordion = ({episodeObj}) => {
  const season = [
    {
        id: 1,
        name: 'Season 1',
        episodes: 11,
        imageUrl:
            'https://resizing.flixster.com/gsGd4m0Fm2campmJ9ZyaYXWPS1A=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEzMDE3Ni53ZWJw',
    },
    {
        id: 2,
        name: 'Season 2',
        episodes: 10,
        imageUrl:
        'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11928964_b_v9_ac.jpg',
      },
      {
        id: 3,
        name: 'Season 3',
        episodes: 10,
        imageUrl:
        'https://resizing.flixster.com/gsGd4m0Fm2campmJ9ZyaYXWPS1A=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEzMDE3Ni53ZWJw',
      },
      {
        id: 4,
        name: 'Season 4',
        episodes: 10,
        imageUrl:
            'https://resizing.flixster.com/x8gJp78ygKg_VQbdHpuDHdIijnE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjU5NjY2My53ZWJw',
      },
      {
        id: 5,
        name: 'Season 5',
        episodes: 10,
        imageUrl:
            'https://www.syfy.com/sites/syfy/files/2021/06/rick-and-morty-season-5.jpg',
      },
  ]
    
    return (
    <div className='w-full bg-gray-200 flex justify-center items-center h-screen px-4'>
      <div className='w-full max-w-lg mx-auto'>
        {/* accordion */}
        <div className='w-full bg-white'>
          {/* Head */}
          <div className='flex justify-between items-center shadow-md rounded-md'>
            <h1 className='font-medium text-gray-800 p-2'>Season 1</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
          {/* content */}
        </div>
          {/* {episodes.map( epsiode => (
            <EpisodeListItem key={epsiode.id} episodeObj={epsiode}/>
          ))} */}
          <p>{episodeObj.name}</p>
          <p>{episodeObj.episode}</p>
      </div>


    </div>
  )
}

export default SeasonAccordion