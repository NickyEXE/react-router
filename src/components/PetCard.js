import React from 'react';
import { useHistory } from 'react-router-dom'

const PetCard = props => {
  const { id, name, image, isAdopted, description, happiness } = props.pet;
  const history = useHistory()

  return (
    <div className="pet-card">
      <img className="card-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
      <div className="card-info">
        <h5>{name}</h5>
        <p>Happiness: {happiness}</p>
        <p>{ description }</p>
        <p>{isAdopted ? 'No Longer up for Adoption' : 'Up for Adoption!'}</p>
      </div>
      <button onClick={() => history.push(`pets/${id}`)}>Visit {name}!</button>
      <button onClick={() => props.populateForm(props.pet)}>Edit {name}!</button>
      <button onClick={() => props.delete(id)}>Send {name} to Grandma's for the Weekend!</button>
    </div>
  )
}

export default PetCard;
