import React from 'react'
import AvatarIcon from './AvatarIcon'
import { useNavigate, useParams } from 'react-router-dom'

const CharacterCard = ( {characterObj} ) => {
    const navigate = useNavigate();
    
    const navigateToProfile = (id) => {
        navigate(`profile/${id}/`);
    };

    return (
    <div className='bg-lime-200 rounded-md shadow-lg p-4 h-100 w-100'>
        <div key={characterObj.id} className='flex gap-2 flex-wrap'>
            <div className='flex flex-col items-center justify-evenly'>
                <AvatarIcon status={characterObj.status} image={characterObj.image}/>
                <button 
                    onClick={() => navigateToProfile(characterObj.id)}
                    className='p-2 bg-slate-400 rounded-md shadow-sm hover:bg-emerald-300'>View Profile
                </button>
            </div>
            <div className='flex-col justify-start text-left'>
                <div>
                    <h1 className='font-bold underline'> Name:</h1>
                    <h2> {characterObj.name} </h2>
                </div>
                <div>
                    <h1 className='font-bold underline'> Species: </h1>
                    <h2> {characterObj.species} </h2>
                </div>
                <div>
                    <h1 className='font-bold underline'> Episode Features: </h1>
                    <h2> {characterObj.episode.length} </h2>
                </div>
            </div>
        </div>
    </div>
  )
    
}

export default CharacterCard