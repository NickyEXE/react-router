import React from 'react';
import PetProfile from './PetProfile';
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
    fetch(`http://localhost:7001/cats/${this.state.form.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.form),
    })
    .then(response => response.json())
    .then(this.overwritePet)
  }

  populateForm = (pet) => this.setState({form: pet, modal: true})

  render(){
    console.log(this.state.form)
    return (
      <div className="index-page">
        <h3>!! All of Our Pets !!</h3>
        <button onClick={this.toggleModal}>Toggle Modal</button>
        <div className="simple-flex-row index-wrap">
          {this.state.pets.map(pet => <PetCard key={pet.id} populateForm={this.populateForm} pet={pet} />)}
        </div>
        <PetFormModal onChange={this.onChange} onSubmit={this.onSubmit} {...this.state.form} toggle={this.toggleModal} display={this.state.modal}/>
      </div>
    )
  }

}

export default PetIndex;
