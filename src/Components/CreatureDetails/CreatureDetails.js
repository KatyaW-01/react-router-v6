import React from 'react';
import './CreatureDetails.css';
import { getCreatureDetails } from '../../data/animalData'
import {useParams} from 'react-router-dom'

const CreatureDetails = () => {
  const creatureType = useParams().creatureType
  const creatureId = useParams().id

  const creatureStats = getCreatureDetails(creatureType, creatureId)
  return (
    <div>
      <h1>{creatureStats.name}</h1>
      <img src={creatureStats.image} className='app-img-no-hover'/>
      <p className='creature-bio'>{creatureStats.bio}</p>
    </div>
  )
}

export default CreatureDetails;
