import React from 'react';
import { Redirect } from 'react-router-dom'

const API = 'http://localhost:7001/cats'

class PetProfile extends React.Component {
  state = {
    pet: null,
    redirect: null,
  }

  getPet(){
    fetch(`${API}/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(pet => this.setState({ pet }))
  }

  componentDidMount() {
    this.getPet()
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.id !== prevProps.match.params.id){
      this.getPet()
    }
  }

  renderPet = () => {
    const { image, name, happiness, description, isAdopted } = this.state.pet;
    return (

        <div className="pet-page">
          <img className="page-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
          <div className="page-info">
            {this.state.redirect && <Redirect to={this.state.redirect}/>}
            <h2>{name}</h2>
            <div>How's {name} doing today? {happiness > 0 ? '❤️'.repeat(happiness) : '😿'}</div>
            <div><b>{name}</b> says {description}</div>
            <div className={isAdopted ? '' : 'highlight'}>{isAdopted ? 'No Longer up for Adoption' : 'Up for Adoption!'}</div>
          </div>
          <div>
            <div onClick={() => this.setState({redirect: `/pets/${parseInt(this.props.match.params.id) -1 }`})}>⬅️</div>
            <div>➡️</div>
            <button onClick={this.props.history.goBack}>Go Back</button>
          </div>
        </div>


    )
  }

  render(){
    return this.state.pet ? this.renderPet() : <div> No Pet Selected... Try going back to our Pets! </div>
  }
}

export default PetProfile;
