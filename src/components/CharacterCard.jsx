import React from 'react'
import AvatarIcon from './AvatarIcon'

const CharacterCard = ({idx, image, name, species, episodeList, status}) => {
    return (
    <div className='bg-lime-200 rounded-md shadow-lg p-4'>
        <div key={idx}>
            <AvatarIcon status={status} image={image}/>
            <div>
                <h1> Name: {name} </h1>
                <h2> {name} </h2>
            </div>
            <div>
                <h1> Species: {species} </h1>
                <h2> {species} </h2>
            </div>
            <div>
                <h1> Episode Features: </h1>
                <h2> {episodeList.length} </h2>
            </div>
        </div>
    </div>
  )
    
}

export default CharacterCard