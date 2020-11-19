import React from 'react';


const PetCard = props => {
    const { id, name, image, isAdopted } = props;
    return (
        <div className="pet-card">
            <img className="card-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
            <div className="card-info">
                <h5>{name}</h5>
                <div>{isAdopted ? 'No Longer up for Adoption' : 'Up for Adoption!'}</div>
            </div>
            <button onClick={() => console.log("make this work")}>Visit {name}!</button>
        </div>
    )
}

export default PetCard;
