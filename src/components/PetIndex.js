import React from 'react';
import PetCard from './PetCard';
import { PetFormModal } from '.'

const API = 'http://localhost:7001/cats'

class PetIndex extends React.Component {
  state = {
    pets: [],
    modal: false,
    form: {
      name: "",
      happiness: 0,
      description: "",
      image: "",
      isAdopted: false,
      id: null
    }
  }

  componentDidMount(){
    fetch(API).then(res => res.json()).then(pets => this.setState({ pets }))
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  openNewPetForm = () => this.setState({
    modal: true,
    form: {
      name: "",
      happiness: 0,
      description: "",
      image: "",
      isAdopted: false,
      id: null
    }
  })

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({form:
      {
        ...this.state.form,
        [name]: value
      }
    })
  }

  overwritePet = (pet) => {
    const newPets = this.state.pets.map(p => p.id === pet.id ? pet : p)
    this.setState({ pets: newPets, modal: false })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.form),
    }
    if (this.state.form.id){
      fetch(`http://localhost:7001/cats/${this.state.form.id}`, {...options, method: "PATCH"})
      .then(response => response.json())
      .then(this.overwritePet)
    } else {
      fetch(`http://localhost:7001/cats/`, {...options, method: "POST"})
      .then(response => response.json())
      .then(pet => this.setState({pets: [...this.state.pets, pet], modal: false}))
    }
  }

  deletePet = (id) => {
    fetch(`http://localhost:7001/cats/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(() => {
      const newPets = this.state.pets.filter(pet => pet.id !== id)
      this.setState({pets: newPets})
    })
  }

  populateForm = (pet) => this.setState({form: pet, modal: true})

  render(){
    return (
      <div className="index-page">
        <h3>!! All of Our Pets !!</h3>
        <button onClick={this.openNewPetForm}>Add New Pet</button>
        <div className="simple-flex-row index-wrap">
          {this.state.pets.map(pet => <PetCard key={pet.id} populateForm={this.populateForm} delete={this.deletePet} pet={pet} />)}
        </div>
        <PetFormModal onChange={this.onChange} onSubmit={this.onSubmit} {...this.state.form} toggle={this.toggleModal} display={this.state.modal}/>
      </div>
    )
  }

}

export default PetIndex;
