import React from 'react';
import './App.css';
import { Auth, Help, Home, Nav, PetIndex, PetProfile } from './components';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav/>
        <Auth />
        <Help />
        <Home />
        <PetProfile />
        <PetIndex />
      </div>
    );
  }
}

export default App;
