import React from 'react';
import { useHistory } from 'react-router-dom'

const PetCard = props => {
  const { id, name, image, isAdopted } = props;
  const history = useHistory()

  return (
    <div className="pet-card">
      <img className="card-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
      <div className="card-info">
        <h5>{name}</h5>
        <div>{isAdopted ? 'No Longer up for Adoption' : 'Up for Adoption!'}</div>
      </div>
      <button onClick={() => history.push(`pets/${id}`)}>Visit {name}!</button>
    </div>
  )
}

export default PetCard;
